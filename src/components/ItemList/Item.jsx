import { useState } from 'react';

function Item({ item, onChange, onDelete }) {
  const [isFlux, setIsFlux] = useState(false);

  let itemContent;
  if (isFlux) {
    itemContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            onChange({
              ...item,
              text: e.target.value,
            });
          }}
        />

        <button
          type='button'
          className='button'
          onClick={() => setIsFlux(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p style={{ textDecoration: item.finished ? 'line-through' : null }}>
          {item.text}
        </p>
        <button
          type='button'
          className='edit-button'
          onClick={() => setIsFlux(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <div>
      <input
        type='checkbox'
        checked={item.finished}
        onChange={(e) => {
          onChange({
            ...item,
            finished: e.target.checked,
          });
        }}
      />
      {itemContent}
      <button
        type='button'
        className='delete-button'
        aria-label='delete-button'
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Item;
