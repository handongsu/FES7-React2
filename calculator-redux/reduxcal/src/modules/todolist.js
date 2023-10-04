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

function todoListReducer(state = initialState, action){
  switch(action.type){
    case 'ADD_TODO':
      const content =  action.payload;
      const newTodo = {
        id: state.todos.length,
        content,
        isDone: false,
      };
      return {todos : [...state.todos, newTodo]};
    case 'DELETE_TODO':
      return {todos: state.todos.filter((todo) => todo.id !== action.payload)};
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo) => 
          todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo
        ),
      };
      default:
        return state;
  }
}

export default todoListReducer;