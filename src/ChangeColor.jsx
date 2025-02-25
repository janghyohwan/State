import { useState } from "react";

const ChangeColor = () => {
  const [num, setNum] = useState(0);
  const background = ["pink", "skyblue", "yellow"];
  const changeColor = () => {
    setNum((prev) => (prev + 1) % background.length);
  };
  return (
    <>
      <button
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: background[num],
        }}
      >
        슥슥삭삭
      </button>
      <button
        onClick={changeColor}
        style={{ width: "1000px", height: "300px" }}
      >
        색바꾸기버튼
      </button>
    </>
  );
};
export default ChangeColor;
