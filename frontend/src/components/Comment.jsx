import React from 'react';
import './styles.css';

const Comment = ({ username, email, homePage, text }) => {
  return (
    <div className = "comment">
      <h4 className = "comment-username">{username}</h4>
      <p className = "comment-email">{email}</p>
      <p className = "comment-homepage">{homePage? homePage: ""}</p>
      <p className = "comment-text">{text}</p>
    </div>
  );
}

export default Comment;