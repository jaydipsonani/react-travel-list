import { useState } from 'react';
import Logo from './component/Logo';
import Form from './component/Form';
import Item from './component/item';
import Stats from './component/stats';
import PackingList from './component/Packinglist';

import './App.css';

function App() {
  const [items, setItem] = useState([])

  const handleAdd = (item) => {
    setItem((items) => [...items, item])
  }

  const handleDelete = (id) => {
    console.log(id)
    setItem((items) => items.filter((item) => item.id !== id))
  }

  const handleToggleItems = (id) => {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed }
          : item))
  }

  const handleClearItems = () => {
    const confirmed = window.confirm('Are you sure you want to clear all items?')
    if (confirmed) { setItem([]) }
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAdd} />
      <PackingList items={items} onDeleteItems={handleDelete} onToggleItems={handleToggleItems}
        onClearItems={handleClearItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;
