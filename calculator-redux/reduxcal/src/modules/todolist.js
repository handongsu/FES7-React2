export const onAddTodo = (content) => {
  return {type : 'ADD_TODO' , payload: content}
}
export const onDeleteTodo = (id) => {
  return { type : 'DELETE_TODO' , payload: id}
}
export const onToggleTodo = (id) => {
  return { type : 'TOGGLE_TODO' , payload: id}
}

const initialState = {todos: []};

