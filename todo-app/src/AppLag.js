import './App.css';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

function App() {
  // --------- 컴포넌트 최적화 전
  function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
      array.push({
        id: i,
        text: `할 일 ${i}`,
        checked: false,
      });
    }

    return array;
  }
  // 고윳값으로 사용될 id
  const nextId = useRef(2050);
  const [todos, setTodos] = useState(createBulkTodos);

  // 추가 기능
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos],
  );

  // 삭제 기능
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // 수정 기능
  const onToggle = useCallback(
    (id) => {
      setTodos(
        // map 함수를 사용
        // id 값이 같을때는 정해진 규칙대로 새로운 객체 생성
        // id 값이 다를때는 변화를 주지않고 처음 받아왔던 상태 그대로를 반환.
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  // useCallback
  // 값이 업데이트되지 않음 (컴포넌트에서 props 값이 변경되지 않음)
  // 원래는 그래도 계속해서 해당 함수가 실행되지만 useCallback을 사용하면
  // Virtual DOM 리렌더링 No / 컴포넌트의 결과물을 재사용 및 최적화

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
