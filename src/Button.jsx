import { useState } from "react";

const Button = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setNum((prev) => {
            return prev == 0 ? 0 : prev - 1;
          });
        }}
      >
        -
      </button>
      <span
        style={{ color: num >= 10 ? "blue" : "black" }}
        onClick={() => {
          setNum((prev) => {
            return prev;
          });
        }}
      >
        {num}
      </span>
      <button
        onClick={() => {
          setNum((prev) => {
            return prev + 1;
          });
        }}
      >
        +
      </button>
    </>
  );
};
export default Button;
