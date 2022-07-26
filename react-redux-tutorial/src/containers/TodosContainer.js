import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import { connect } from 'react-redux';
// 액션 생성 함수가 많아지면 사용하는 유틸함수
import { bindActionCreators } from 'redux';

// (2) 함수 내부 선언

// 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부름.
const TodosContainer = () => {
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }));

    const dispatch = useDispatch();
    const onChangeInput = useCallback((input) => dispatch(changeInput(input)));

    const onInsert = useCallback(
        (text) => dispatchEvent(insert(text)),
        [dispatch],
    );
    const onToggle = useCallback((id) => dispatchEvent(toggle(id)), [dispatch]);
    const onRemove = useCallback((id) => dispatchEvent(remove(id)), [dispatch]);
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default TodosContainer;
