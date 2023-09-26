import { useState } from "react";
import CombineComponents from "./components/CombineComponents";
import {CalculatorContext, TodoContext} from "./context/MyContext";

function App() {
  const [result, setResult] = useState(0);
  const [todos, setTodos] = useState([]);

  const add = (value) => setResult(result + value);
  const subtract = (value) => setResult(result - value);
  const multiply = (value) => setResult(result * value);
  const divide = (value) => setResult(result / value);
  const reset = () => setResult(0);

  //할 일 추가 함수
  const onAddTodo = (content) => {  //combineComponents의 inputValue값이 content인자값으로, 추가하면 id,content,isDone 프로퍼티를 갖는 새로운 객체가 추가된다.
    const newTodo = {
      id: todos.length,
      content,
      isDone: false
    }
    setTodos([...todos, newTodo]);
  }

  //할 일 삭제 함수
  const onDeleteTodo = (id) => {
    const newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  }

  const onToggleTodo = (id) => {  //id 값을 기준으로 돌면서 확인 ,기존 배열에 추가하는 것이 아닌 다른 새배열을 추가 하는 것
    const newTodo = todos.map(todo => todo.id === id ? {...todo , isDone: !todo.isDone } : todo);
    setTodos(newTodo);
  }

  return (
    <CalculatorContext.Provider value={{result, add, subtract, multiply, divide, reset}}>
      <TodoContext.Provider value={{todos, onAddTodo, onDeleteTodo, onToggleTodo}}>
        <CombineComponents/>
      </TodoContext.Provider>
    </CalculatorContext.Provider>
  );
}
export default App;
