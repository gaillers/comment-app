import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useComments } from '@hooks/useComments';

const CommentForm: React.FC = () => {
  const { handleAddComment } = useComments();
  const [commentBody, setCommentBody] = useState('');

  const onSubmit = () => {
    if (commentBody.trim()) {
      handleAddComment(commentBody, 1);
      setCommentBody('');
    }
  };

  return (
    <Box>
      <TextField
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        label="Add a comment"
        fullWidth
        variant="outlined"
        margin='none'
      />
      <Button onClick={onSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Comment
      </Button>
    </Box>
  );
};

export default CommentForm;
