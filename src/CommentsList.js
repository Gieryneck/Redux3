import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;
                        // sprawdzic czy trzeba tu robic destrukturyzacje {comments}, bo chyba wystarczy samo 
                        // 'comments' skoro sa zmapowane w CommentsListContainer
export default CommentsList;