import { useState } from "react";
const Quiz_2 = () => {
  const [num, setNum] = useState(0);
  const cafeArr = [
    { name: "바크콜", price: 5500 },
    { name: "아메리카노", price: 2000 },
    { name: "프라푸치노", price: 3500 },
    { name: "화이트촠호", price: 4500 },
    { name: "카페라테", price: 4000 },
  ];
  return (
    <>
      <div>
        <button
          onClick={() => {
            setNum((prev) => {
              if (prev == 0) {
                alert("처음임!");
                return 0;
              } else {
                return prev - 1;
              }
            });
          }}
        >
          이전메뉴
        </button>
        <span>매뉴이름 :{cafeArr[num].name}</span>
        <span>메뉴가격 :{cafeArr[num].price}</span>
        <button
          onClick={() => {
            setNum((prev) => {
              if (prev == 4) {
                alert("마지막임");
                return prev;
              } else {
                return prev + 1;
              }
            });
          }}
        >
          다음메뉴
        </button>
      </div>
    </>
  );
};
export default Quiz_2;
