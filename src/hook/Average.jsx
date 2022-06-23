import React, { useReducer } from "react";
import { useMemo } from "react";
import { useState } from "react";
import useInputs from "./useinputs";

// useMemo
// 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있음.

const getAverage = (numbers) => {
  console.log("평균값 계산중...");
  if (numbers.length === 0) return 0;
  // 변신!
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  /* 특정값 변경 시만 연산을 실행 / 변경이 없을 경우 이전 결과 노출 */
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {/* map 사용법 1 (한줄일때) */}
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
        {/* map 사용법 2 */}
        {/* {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })} */}
      </ul>
      <div>
        <b>평균값 :</b>
        {/* 1. 인풋값에 입력되는 순간도 계산을 하고있음  */}
        {/* {getAverage(list)} */}
        {/* 2. useMemo 사용 */}
        {avg}
      </div>
    </div>
  );
};

export default Average;
