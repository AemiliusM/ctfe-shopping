import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    onAddItem(text);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        className='form-input'
        placeholder='Add items here'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit' className='submit-button'>
        Add Item
      </button>
    </form>
  );
}
