import React from 'react';

import Comment from './Comment';

export const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <Comment
          username={comment.username}
          email={comment.email}
          homePage={comment.homePage}
          text={comment.text}
        />
      ))}
    </div>
  );
}