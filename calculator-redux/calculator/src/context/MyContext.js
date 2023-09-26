import { createContext } from 'react';

export const CalculatorContext = createContext({
result: 0,
add: () => {},
subtract: () => {},
multiply: () => {},
divide: () => {},
reset: () => {}
});

export const TodoContext = createContext({
  todos: [],
  onAddTodo: () => {},
  onDeleteTodo: () => {},
  onToggleTodo: () => {}
});

