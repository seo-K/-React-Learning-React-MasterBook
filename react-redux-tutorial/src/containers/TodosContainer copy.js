import React from 'react';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import { connect } from 'react-redux';
// 액션 생성 함수가 많아지면 사용하는 유틸함수
import { bindActionCreators } from 'redux';

// (2) 함수 내부 선언

// 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부름.
const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    // 비구조화 할당을 통해 todos를 분리하여
    // state.todos.input 대신 todos.input 을 사용
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput,
        insert,
        toggle,
        remove,
    },
)(TodosContainer);
