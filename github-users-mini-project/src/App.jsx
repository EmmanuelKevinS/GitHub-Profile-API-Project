import './App.css';
import Input from './components/Input';
import Display from './components/Display';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchedName, setSearchedName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearchedName = async function (username) {
    console.log(username);
    setIsLoading(true);
    try {
      const response = await axios(`https://api.github.com/users/${username}`);
      const data = response.data;
      console.log(data);
      setSearchedName(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setIsLoading(false);
      setSearchedName('not-found');
    }
  };
  return (
    <div className="overall-layout">
      <Input onSearchedName={handleSearchedName} />
      <Display searchedName={searchedName} isLoading={isLoading} />
    </div>
  );
}

export default App;
