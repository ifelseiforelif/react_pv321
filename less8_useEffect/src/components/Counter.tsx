import { FC, useEffect } from "react";
import { CounterType } from "../reducers/counter-reducer";

const Counter: FC<CounterType> = ({ value }: CounterType) => {
  useEffect(() => {
    fetch("").then;
    return () => {
      console.log("unmounting Counter Component");
    };
  }, []);
  return <>Counter {value}</>;
};
export default Counter;
