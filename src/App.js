import { useEffect, useState } from 'react';
import Logo from './component/Logo';
import Form from './component/Form';
import Item from './component/item';
import Stats from './component/stats';
import PackingList from './component/Packinglist';

import './App.css';

function App() {
  // Initialize items from localStorage
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('packingListItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Update localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('packingListItems', JSON.stringify(items));
  }, [items]);

  // Add a new item
  const handleAdd = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // Delete an item
  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Toggle the packed state of an item
  const handleToggleItems = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  // Clear all items
  const handleClearItems = () => {
    const confirmed = window.confirm('Are you sure you want to clear all items?');
    if (confirmed) {
      setItems([]);
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdd} />
      <PackingList
        items={items}
        onDeleteItems={handleDelete}
        onToggleItems={handleToggleItems}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
