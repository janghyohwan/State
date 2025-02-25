import { useState } from "react";

const Quiz = () => {
  const [emoji, setEmoji] = useState(0);
  const arr = ["😶", "😀", "😁", "😂", "🤣", "😃"];
  return (
    <>
      <button
        onClick={() => {
          setEmoji((prev) => {
            return prev == 0 ? prev : prev - 1;
          });
        }}
      >
        이전 스텝
      </button>
      <span>{arr[emoji]}</span>
      <button
        onClick={() => {
          setEmoji((prev) => {
            return prev == arr.length - 1 ? prev : prev + 1;
          });
        }}
      >
        다음 스텝
      </button>
    </>
  );
};
export default Quiz;
