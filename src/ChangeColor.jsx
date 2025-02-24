import { useState } from "react";

const ChangeColor = () => {
  const [num, setNum] = useState();
  const background = ["pink", "skyblue", "yellow"];
  return (
    <>
      <button style={{ width: "300px", height: "300px", color: num }}>
        슥슥삭삭
      </button>
      <button style={{ width: "300px", height: "300px" }}>색바꾸기버튼</button>
    </>
  );
};
export default ChangeColor;
