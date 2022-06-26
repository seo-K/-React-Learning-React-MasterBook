import React, { Component, useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('저기');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ backgroundColor: 'red' }}
        onClick={() => setColor('red')}
      >
        빨강
      </button>
      <button
        style={{ backgroundColor: 'blue' }}
        onClick={() => setColor('blue')}
      >
        파랑
      </button>
      <button
        style={{ backgroundColor: 'green' }}
        onClick={() => setColor('green')}
      >
        초록
      </button>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  );
};

export default Say;
