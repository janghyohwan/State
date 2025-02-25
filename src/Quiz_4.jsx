import { useState } from "react";

const Quiz_4 = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input
        onChange={(e) => {
          setInputValue((prev) => e.target.value);
        }}
      ></input>
      <div>{inputValue.length}</div>
    </>
  );
};

export default Quiz_4;
