import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

const refreshArchivedTodo = (id) => {
  console.log(id);
};

const handleBlur = () => {
  console.log('blur');
};

const handleKeydown = () => {
  console.log('key down');
};

const resetSettingsTimeout = () => {};
const deleteTodo = (id) => {};

const showSettings = true;

const TodoItem = ({ todo, archived }) => {
  return (
    <li className="todo-item">
      {
        /* If today, show checkbox */
        !archived ? (
          <div
            v-if="!archived"
            className={`checkbox__custom ${todo.completed ? 'checked' : ''}`}>
            <input
              className="checkbox__native"
              type="checkbox"
              id={todo.id}
              // v-model="checked"
              // ref="checkbox"
            />
          </div>
        ) : (
          <button
            className="refresh-btn btn"
            title="Add to Today's List"
            onClick={() => refreshArchivedTodo(todo.id)}>
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
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        )
      }
      <label
        htmlFor={todo.id}
        aria-label={todo.content}
        className={`todo-content ${todo.completed ? 'checked' : ''}`}
        onClick={(e) => e.preventDefault()}>
        <span
          contentEditable={!archived && !todo.completed}
          suppressContentEditableWarning={true}
          tabIndex={!archived && !todo.completed ? 1 : 0}
          className="todo-content__inner"
          // ref="todo-content"
          onBlur={() => handleBlur()}
          onKeyDown={() => handleKeydown()}>
          {todo.content}
        </span>
      </label>
      {!archived && (
        <div
          className={`edit-wpr ${showSettings ? '' : 'hide'}`}
          onClick={() => resetSettingsTimeout}>
          <DeleteButton
            content={todo.content}
            onClick={() => deleteTodo(todo.id)}
          />
          <div className={`drag-handle ${showSettings ? '' : 'hide'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <title>Drag to Re-order</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </div>
        </div>
      )}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  archived: PropTypes.bool,
};

export default TodoItem;
