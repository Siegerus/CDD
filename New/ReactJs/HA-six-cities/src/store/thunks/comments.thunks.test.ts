import { createAPI } from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { Review, State } from '../../types/types';
import { makeFakeComments } from '../../utils/mocks/makeFakeComments';
import { commentsActions } from '../slices/comments';
import { APIRoute } from '../../constants';

describe('Comments async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);

  const middleware = [thunk.withExtraArgument(axios)];

  const mockStoreCreator = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, ReturnType<typeof createAPI>, Action>
  >(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      comments: {
        comments: [],
      },
    });
  });

  describe('data/fetchComments action', () => {
    it('Should dispatch "data/fetchComments.pending" and "data/fetchComments.fullfield when serves response 200"', async () => {
      const fakeComments = [makeFakeComments(), makeFakeComments()];
      const id = 'thisIsId';
      mockAxiosAdapter
        .onGet(`${APIRoute.COMMENTS}-${id}.json`)
        .reply(200, fakeComments);

      await store.dispatch(commentsActions.fetchComments(id));

      const actions = store.getActions().map((action) => action.type);
      const fetchCommentsActionFullfield = store
        .getActions()
        .at(1) as ReturnType<typeof commentsActions.fetchComments.fulfilled>;

      expect(actions).toEqual([
        commentsActions.fetchComments.pending.type,
        commentsActions.fetchComments.fulfilled.type,
      ]);

      expect(fetchCommentsActionFullfield.payload).toEqual(fakeComments);
    });
  });

  it('Should dispatch "data/fetchComments.pending" and "data/fetchComments.rejected" when server reponse 400', async () => {
    const id = 'thisIsId';
    mockAxiosAdapter.onGet(`${APIRoute.COMMENTS}-${id}.json`).reply(400, []);

    await store.dispatch(commentsActions.fetchComments(id));

    const actions = store.getActions().map((action) => action.type);

    expect(actions).toEqual([
      commentsActions.fetchComments.pending.type,
      commentsActions.fetchComments.rejected.type,
    ]);
  });

  describe('data/sendComments action', () => {
    it('Should dispath  "data/sendComment.pending" and "data/sendComment.fullfield" when server response 200', async () => {
      const fakeComment = makeFakeComments();

      mockAxiosAdapter.onPost(APIRoute.POST).reply(200, fakeComment);

      await store.dispatch(commentsActions.sendComment(fakeComment));

      // type sendCommentsActionFullfieldType = ReturnType<typeof commentsActions.sendComment.fulfilled>;
      const actions = store.getActions().map((action) => action.type);
      const sendCommentsActionFullfield = store
        .getActions()
        .at(1) as ReturnType<typeof commentsActions.sendComment.fulfilled>;

      expect(actions).toEqual([
        commentsActions.sendComment.pending.type,
        commentsActions.sendComment.fulfilled.type,
      ]);

      expect(sendCommentsActionFullfield.payload).toEqual(fakeComment);
    });

    it('Should dispath  "data/sendComment.pending" and "data/sendComment.rejected" when server response 400', async () => {
      const fakeComment = makeFakeComments();
      mockAxiosAdapter.onPost(APIRoute.POST).reply(400);

      await store.dispatch(commentsActions.sendComment(fakeComment));

      const actions = store.getActions().map((action) => action.type);

      expect(actions).toEqual([
        commentsActions.sendComment.pending.type,
        commentsActions.sendComment.rejected.type,
      ]);
    });
  });
});
