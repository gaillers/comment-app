import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchComments, addComment, deleteComment, selectComments } from '@store/slices/comments/commentsSlice';
import { AppDispatch, RootState } from '@store/index';

export const useComments = () => {
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector(selectComments);
  const status = useSelector((state: RootState) => state.comments.status);
  const error = useSelector((state: RootState) => state.comments.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchComments());
    }
  }, [dispatch, status]);

  const handleAddComment = (commentBody: string, postId: number) => {
    const newComment = {
      id: Date.now(),
      body: commentBody,
      postId,
    };
    dispatch(addComment(newComment));
  };

  const handleDeleteComment = (id: number) => {
    dispatch(deleteComment(id));
  };

  return {
    comments,
    status,
    error,
    handleAddComment,
    handleDeleteComment,
  };
};
