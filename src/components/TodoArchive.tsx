import React, { useState } from 'react';
import { Todo } from '../interface';
import TodoItem from './TodoItem';

const initialTodos = [
  {
    id: 0,
    content: 'Test',
    completed: false,
    dateCreated: new Date(),
    dateArchived: new Date(),
  },
  {
    id: 1,
    content: 'Another thing',
    completed: false,
    dateCreated: new Date(),
    dateArchived: new Date(),
  },
];

const deleteAllArchivedTodos = () => {
  console.log('delete all archived todos');
};

const TodoArchive = () => {
  const [todoArchve, setTodoArchve] = useState<Todo[]>(initialTodos);
  const [drawer, setDrawer] = useState(false);

  return (
    <div>
      {todoArchve.length && (
        <div
          className="drawer"
          // TODO: v-on-click-outside="closeDrawer"
          onKeyDown={() => setDrawer(false)} // TODO: handle esc key only
        >
          <button
            className="drawer-header"
            aria-label={`Archive - ${todoArchve.length} item${
              todoArchve.length > 1 ? 's' : ''
            }`}
            onClick={() => setDrawer(!drawer)}>
            <div>Archive ({todoArchve.length})</div>
          </button>

          {/* TODO: conditionally show/hide */}
          <div className="content-wpr" aria-expanded={drawer}>
            <ul className="content">
              {todoArchve.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} archived />;
              })}
            </ul>
            <button
              className="delete-archive-btn"
              title="Delete Archive"
              onClick={() => deleteAllArchivedTodos()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoArchive;
