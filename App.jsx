import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://surya-interview.appspot.com/list', {
      emailId: email,
    })
    .then(response => {
      setItems(response.data.items);
    })
    .catch(error => {
      console.error("There was an error!", error);
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Items</h3>
        <ul>
          {items.map(item => (
            <li key={item.emailId}>
              <img src={item.imageUrl} alt={`${item.firstName} ${item.lastName}`} />
              <p>{item.firstName} {item.lastName}</p>
              <p>{item.emailId}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


