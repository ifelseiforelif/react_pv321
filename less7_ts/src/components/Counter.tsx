import { FC, FormEvent, FormEventHandler, useRef, useState } from "react";

interface ICounter {
  value: number;
}

const Counter: FC<ICounter> = (props: ICounter): JSX.Element => {
  const my_ref: any = useRef();
  const [name, setName] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent
  ): void => {
    e.preventDefault();
    setName(my_ref.current.value);
    console.log(name);
  };

  return (
    <>
      Counter {props.value}
      <p>{name}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={my_ref}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>OK</button>
      </form>
    </>
  );
};

export default Counter;
