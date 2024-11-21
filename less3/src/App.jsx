import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([{ id: 1, title: "todo 1" }]);
  const ref_todo = useRef();

  const handleAddTodo = () => {
    const new_id = todos.length + 1;
    setTodos([...todos, { id: new_id, title: ref_todo.current.value }]);
  };
  return (
    <>
      <input type="text" ref={ref_todo} />
      <div>
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
      <hr />
      {todos.map((el) => (
        <p key={el.id}>
          {el.id} : {el.title}
        </p>
      ))}
    </>
  );
}
export default App;
