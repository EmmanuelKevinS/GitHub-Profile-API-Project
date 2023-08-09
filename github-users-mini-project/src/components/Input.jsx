/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import '../styles/input.css';

const Input = ({ onSearchedName }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchedName(username);
    setUsername('');
  };
  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter user"
          className="input-box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="input-btn">🔍</button>
      </form>
    </div>
  );
};

export default Input;
