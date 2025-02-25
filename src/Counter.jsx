import { useState } from "react";
const Counter = () => {
  const [num, setNum] = useState(0);
  const plus = () => {
    setNum((prev) => {
      return prev + 1;
    });
  };
  const minus = () => {
    setNum((prev) => {
      return prev == 0 ? prev : prev - 1;
    });
  };
  return (
    <>
      <button onClick={plus}>+</button>
      <div>{num}</div>
      <button onClick={minus}>-</button>
    </>
  );
};
export default Counter;
