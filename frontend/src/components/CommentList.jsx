import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          author={comment.author}
          text={comment.text}
        />
      ))}
    </div>
  );
}

export default CommentList;