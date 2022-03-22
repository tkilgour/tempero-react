import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Todo } from '../interface';
import TodoItem from './TodoItem';

const initialTodos = [
  {
    id: 0,
    content: 'Test',
    completed: false,
    dateCreated: new Date(),
    dateArchived: null,
  },
  {
    id: 1,
    content: 'Another thing',
    completed: false,
    dateCreated: new Date(),
    dateArchived: null,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  return (
    <main id="content" className="todo-list">
      {!todos.length ? (
        <p className="no-content" v-if="!todos.length">
          Tap the + button
          <span className="no-mobile">, or just start typing</span> to get
          started!
        </p>
      ) : (
        ''
      )}
      <ReactSortable list={todos} setList={setTodos}>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ReactSortable>
      {/* <draggable
        v-model="mutatableTodos"
        item-key="id"
        :animation="100"
        handle=".drag-handle"
        tag="transition-group"
        :component-data="{ tag: 'ul', name: 'todo-list', type: 'animation' }"
        @start="clearSettingsTimeout"
        @end="resetSettingsTimeout"
      >
        <template #item="{ element }">
          <TodoItem :todo="element" :key="element.id" />
        </template>
      </draggable> */}
    </main>
  );
};

export default TodoList;
