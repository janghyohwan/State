import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setNum((prev) => {
            return prev + 2;
          });
        }}
      >
        +
      </button>
      <div>{num}</div>
      <button
        onClick={() => {
          setNum((prev) => {
            return prev - 2;
          });
        }}
      >
        -
      </button>
    </>
  );
};
export default Counter;
