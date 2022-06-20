import React, { Component, useState } from "react";

const IterationSample = () => {
  // map() 함수 문법
  // arr.map(callback, [thisArg])
  // callback : 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세 가지입니다.
  // - currentValue : 현재 처리하고있는 요소
  // - index : 현재 처리하고있는 요소의 index 값
  // - array : 현재 처리하고있는 원본배열

  // thisArg(선택항목) : callback 함수 내부에서 사용할 this 래퍼런스

  // key ( 컴포넌트 배열을 렌더링 시 어떤 원소에 변동[생성,제거,수정]이 있는지 확인하는 용도 )

  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "아이스" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);

  // 데이터 추가 및 리셋 함수
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  // 데이터 삭제 함수
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
