import { useState, useRef } from "react";
//HOOK USEREF
// export default function Input() {
//   const ref_name = useRef();
//   const [name, setName] = useState("default");
//   const handleName = () => {
//     setName(ref_name.current.value);
//   };
//   return (
//     <>
//       <p>Name: {name}</p>
//       <input type="text" value={name} ref={ref_name} onChange={handleName} />
//     </>
//   );
// }
export default function Input() {
  const [name, setName] = useState("default");
  return (
    <>
      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
}
