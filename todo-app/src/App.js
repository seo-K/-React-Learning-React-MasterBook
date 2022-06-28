import './App.css';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState, useReducer } from 'react';

// useReducer 사용
// 코드 수정이 많지만, 상태 업데이트 로직을모아 컴포넌트 바깥에 둘 수 있다는 장점이 있음.
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 추가 기능
      // {type : 'INSERT', todo: { id: 1, text: 'tdo', checked: false}}
      return todos.concat(action.todo);

    case 'REMOVE': // 제거 기능
      // {type : 'REMOVE', id: 1}
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': // 토글 기능
      // {type : 'TOGGLE', id: 1}
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

function App() {
  // ---------- 컴포넌트 최적화를 위한 베이스
  // 컴포넌트 리렌더링 이유
  // 1) 자신이 전달받은 props 의 변경
  // 2）자신의 state 값의 변경
  // 3) 부모 컴포넌트 리렌더링
  // 4)forceUpdate 함수 실행

  // (가) React.memo 사용
  // shouldComponetUpdate === react.meno 컴포넌트의 props가 바뀌지 않았다면, no리렌더링
  // 사용법 => export default React.memo(TodoListItem);

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

  // undefined 는 두번째 파라미터에 들어가는 값.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos); // 2. 파라미터 함수 형태 = 처음 렌더링 될 때만 해당 함수 실행
  // const [todos, setTodos] = useState(createBulkTodos()); // 1. 함수 형태 = 리렌더링될 때 마다 해당 함수 실행
  // const [todos, setTodos] = useState(createBulkTodos); // 2. 파라미터 함수 형태 = 처음 렌더링 될 때만 해당 함수 실행

  const nextId = useRef(2501);

  // 추가 기능
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  });

  // 삭제 기능
  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  // 수정 기능
  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  // 추가 기능
  // const onInsert = useCallback(
  //   (text) => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     // (나) useState 함수형 업데이트
  //     // ex) const [ number, setNumber ] = useState(0);
  //     //  const onIncrease = useCallback( () => setNumber(prevNumber => prevNumber + 1 ))
  //     // todo => 추가!!!!
  //     setTodos((todos) => todos.concat(todo));
  //     nextId.current += 1; //nextId 1씩 더하기
  //   },
  //   [todos],
  // );

  // 삭제 기능
  // const onRemove = useCallback(
  //   (id) => {
  //     setTodos((todos) => todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos],
  // );

  // 수정 기능
  // const onToggle = useCallback(
  //   (id) => {
  //     setTodos((todos) =>

  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //       ),
  //     );
  //   },
  //   [todos],
  // );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
