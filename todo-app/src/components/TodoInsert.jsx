import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { MdAdd, MdOutlineSettingsSystemDaydream } from 'react-icons/md';
import './TodoInsert.scss';

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onChanage = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onClick으로도 가능하지만 onSubmit을 사용할 경우 enter도 감지함.
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // 값 초기화

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChanage}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
