import React, { useReducer } from "react";
import { useRef } from "react";
import { useState, useMemo, useCallback } from "react";
import useInputs from "./useinputs";
// 렌더링 성능 최적화 함수

// [useMemo]
// 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있음.
// 숫자, 문자열, 객체 같은 일반값 재사용시  useMemo

// [useCallback]
//  useMemo로 함수를 반환하는 과정에서 더 편리한 hook
// 함수 재사용시 useCallback

// [useRef]
// 렌더링과 관련되지 않은 값을 관리할 시 useRef

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
  const inputEl = useRef(null);

  // 1. 컴포넌트가 리렌더링될 때마다 함수가 새로 생성되는 단점!
  // 랜더링이 자주 발생하거나 컴포넌트의 개수가 많아지면 최적화가 필요
  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };
  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber("");
  // };

  // 2. useCallback함수 사용하여 성능 최적화
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 빈배열은 렌더링 될때 1번만 실행되는 아이

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");

    inputEl.current.focus(); // ref 설정 후 객체 안의 current 값이 실제 엘리먼트를 가리킴.
  }, [number, list]); // number 혹은 list 가 변경될때만 함수 생성

  /* 특정값 변경 시만 연산을 실행 / 변경이 없을 경우 이전 결과 노출 */
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} ref={inputEl} />
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
