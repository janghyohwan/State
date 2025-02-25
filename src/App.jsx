import { useState } from "react";
import Input from "../Input";
import Button from "./Button";
import ChangeColor from "./ChangeColor";
import Counter from "./Counter";
import Length from "./Length";
import Quiz from "./Quiz";
import Quiz_2 from "./Quiz_2";
import Quiz_3 from "./Quiz_3";
import Quiz_4 from "./Quiz_4";

function App() {
  // 상태변화 useState 사용
  // const [inputValue, setInputValue] = useState("");
  // const change = (e) => {
  //   setInputValue((prev) => e.target.value);
  // };
  const [total, setTotal] = useState(0);

  return (
    <>
      <Button />
      <Quiz />
      <Quiz_2 />
      <Quiz_3 />
      <ChangeColor />
      <Quiz_4 />
      {/* <Input choco={change} label={"Email"} />
      <Length length={inputValue.length} /> */}
      <div>
        <Counter setNum={setTotal} />
        <Counter setNum={setTotal} />
        <Counter setNum={setTotal} />
        <span>{total}</span>
      </div>
    </>
  );
}

export default App;
