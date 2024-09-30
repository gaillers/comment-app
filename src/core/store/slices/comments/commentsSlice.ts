import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/index';

import { Comment, CommentsState } from '../../../types/comment.types'; 
import { fetchCommentsApi } from '@services/comment.api'; 

const initialState: CommentsState = {
  comments: [],
  status: 'idle',
  error: null,
};

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  const comments = await fetchCommentsApi();
  return comments;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.unshift(action.payload);
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export const { addComment, deleteComment } = commentsSlice.actions;

export const selectComments = (state: RootState) => state.comments.comments;

export default commentsSlice.reducer;
