import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <TodoList />
    </div>
  );
};

export default App;
