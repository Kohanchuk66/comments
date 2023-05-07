import { useState } from 'react';

function CommentForm(props) {
    
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({ name, comment });

    setName('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ім'я:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Коментар:
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <br />
      <button type="submit">Відправити</button>
    </form>
  );
}

export default CommentForm;