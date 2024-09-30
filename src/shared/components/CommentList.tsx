import React from 'react';
import { List, Paper } from '@mui/material';

import CommentItem from './CommentItem';

import { useComments } from '@hooks/useComments';

import LoadingSpinner from '@ui/LoadingSpinner';
import ErrorMessage from '@ui/ErrorMessage';

const CommentList: React.FC = () => {
  const { comments, status, error, handleDeleteComment } = useComments();

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'failed') {
    return <ErrorMessage message={error} />;
  }

  return (
    <Paper variant="outlined" style={{ maxHeight: 430, overflow: 'auto' }}>
      <List>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} onDelete={handleDeleteComment} />
        ))}
      </List>
    </Paper>
  );
};

export default CommentList;
