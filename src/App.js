import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="container">
      <header>
        <div className="logo">HI</div>
        <h1>Item List Manager</h1>
      </header>

      <div className="item-list">
        <h2>Item List</h2>
        <input 
          type="text" 
          placeholder="Enter item" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDeleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
