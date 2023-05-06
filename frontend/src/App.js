import React, { useState, useEffect } from 'react';
import CommentList from './components/CommentList';

function App() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/comment')
      .then(response => response.json())
      .then(data => {
        setComments(data);
        setIsLoaded(true);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div>
        <h2>Comments</h2>
        <CommentList comments = {comments} />
      </div>
    );
  }
}

export default App;
