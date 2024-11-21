import { useEffect, useState, useRef, useReducer } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { counterReducer, initialState } from "./reducers/counter-reducer";

function App() {
  //const [val, setVal] = useState<number>(0);
  const [val, dispatch] = useReducer(counterReducer, initialState);
  const [isShowCounter, setIsShowCounter] = useState<boolean>(true);
  const my_ref: any = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log("start useEffect App");
  }, []);
  return (
    <>
      App Component
      <input type="number" ref={my_ref} onChange={() => {}} />
      <button
        onClick={() => dispatch({ type: "UP", payload: +my_ref.current.value })}
      >
        OK
      </button>
      <button
        onClick={() => {
          setIsShowCounter(!isShowCounter);
        }}
      >
        Change
      </button>
      {isShowCounter ? (
        <>
          <Counter value={val.value} />
          <button onClick={() => dispatch({ type: "UP", payload: 1 })}>
            UP
          </button>
          <button onClick={() => dispatch({ type: "DOWN", payload: 1 })}>
            DOWN
          </button>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
