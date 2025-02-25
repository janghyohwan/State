import { useState } from "react";
const Input = (props) => {
  const { label, choco } = props;
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div>{label}</div>
      <div
        style={{
          padding: "5px 10px",
          border: "1px solid black",
          borderRadius: "8px",
          display: "flex",
        }}
      >
        <input
          style={{ outline: "none", border: "none", width: "100%" }}
          type="text"
          onChange={choco}
        />
      </div>
      {/* <span>{inputValue.length}</span> */}
    </>
  );
};

export default Input;
