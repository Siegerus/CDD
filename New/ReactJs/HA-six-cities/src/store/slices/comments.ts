import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sendComment, fetchComments } from '../thunks/comments';
import { Review, CommentsState } from '../../types/types';

const initialState: CommentsState = {
  comments: [],
  isCommentsLoading: true,
};

const commentsSlice = createSlice({
  initialState: initialState,
  name: 'comments',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchComments.fulfilled,
        (state: CommentsState, action: PayloadAction<Review[]>) => {
          return {
            ...state,
            comments: action.payload,
            isCommentsLoading: false,
          };
        }
      )
      .addCase(fetchComments.rejected, (state: CommentsState) => {
        return {
          ...state,
          comments: [],
        };
      })
      .addCase(
        sendComment.fulfilled,
        (state: CommentsState, action: PayloadAction<Review>) => {
          return {
            ...state,
            comments: [...state.comments, action.payload],
          };
        }
      );
  },
});

const commentsActions = {
  ...commentsSlice.actions,
  fetchComments,
  sendComment,
};

export { commentsSlice, commentsActions };
