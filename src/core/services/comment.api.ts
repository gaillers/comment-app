import axios from 'axios';
import { Comment } from '../types/comment.types';

export const fetchCommentsApi = async (): Promise<Comment[]> => {
  const response = await axios.get('https://dummyjson.com/comments');
  return response.data.comments;
};