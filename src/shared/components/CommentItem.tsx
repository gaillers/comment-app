import React from 'react';
import { ListItem, ListItemText, IconButton, Box, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface CommentItemProps {
  comment: {
    id: number;
    body: string;
  };
  onDelete: (id: number) => void;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onDelete }) => {
  return (
    <ListItem>
      <Paper elevation={1} style={{ width: '100%', padding: '10px', marginBottom: '8px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <ListItemText primary={comment.body} />
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(comment.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
    </ListItem>
  );
};

export default CommentItem;
