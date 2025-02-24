import Button from "./Button";
import ChangeColor from "./ChangeColor";
import Counter from "./Counter";
import Quiz from "./Quiz";
import Quiz_2 from "./Quiz_2";
import Quiz_3 from "./Quiz_3";

function App() {
  // 상태변화 useState 사용

  return (
    <>
      <Button></Button>
      <Quiz />
      <Quiz_2></Quiz_2>
      <Quiz_3></Quiz_3>
      <Counter></Counter>
      <ChangeColor></ChangeColor>
    </>
  );
}

export default App;
