export interface Comment {
    id: number;
    body: string;
    postId: number;
}

export interface CommentsState {
    comments: Comment[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
