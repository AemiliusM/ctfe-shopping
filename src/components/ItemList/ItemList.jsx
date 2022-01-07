import Item from './Item.jsx';

export default function ItemList({ items, onChangeItem, onDeleteItem }) {
  return (
    <ul className='Item-list' style={{ listStyleType: 'none' }}>
      {items.map((item) => (
        <li key={item.id} className='List-item'>
          <Item item={item} onChange={onChangeItem} onDelete={onDeleteItem} />
        </li>
      ))}
    </ul>
  );
}
