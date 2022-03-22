import React from 'react';
import TodoHeader from './components/TodoHeader';
import './App.scss';
import TodoList from './components/TodoList';
import CreateButton from './components/CreateButton';
import TodoArchive from './components/TodoArchive';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoHeader />
        <TodoList />
        <CreateButton />
        <TodoArchive />
      </div>
    </div>
  );
}

export default App;
