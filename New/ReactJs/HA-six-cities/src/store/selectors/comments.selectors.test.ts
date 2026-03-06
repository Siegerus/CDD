import { selectComments } from '../selectors/comments';

describe('Comments selectors', () => {
  it('Should return comments from state', () => {
    const state = {
      comments: {
        comments: [],
        isCommentsLoading: true,
      },
    };

    const result = selectComments(state);

    expect(result).toBe(state.comments.comments);
  });
});
