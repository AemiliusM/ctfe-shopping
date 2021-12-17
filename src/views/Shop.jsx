import { useReducer } from 'react';
import AddItem from '../components/AddItem/AddItems';
import ItemList from '../components/ItemList/ItemList';

const initialItems = [
  { id: 0, text: 'Pickles', finished: false },
  { id: 1, text: 'Mustard', finished: false },
  { id: 2, text: 'Waffles', finished: false },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          finished: false,
        },
      ];
    }
    case 'changed': {
      return items.map((item) => {
        console.log(item);
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function Shop() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: items.length,
      text,
    });
  };

  const handleChangeItem = (task) => {
    dispatch({
      type: 'changed',
      task,
    });
  };

  const handleDeleteItem = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <AddItem onAddItem={handleAddItem} />
      <ItemList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}
