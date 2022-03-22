import React from 'react';

const createEmptyTodo = () => {
  console.log('create empty todo');
};

const CreateButton = () => {
  return (
    <button
      className="create-btn"
      title="Create New Todo"
      onClick={() => createEmptyTodo()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </button>
  );
};

export default CreateButton;
