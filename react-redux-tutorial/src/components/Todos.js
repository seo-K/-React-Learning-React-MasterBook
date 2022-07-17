import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';
import { RiDeleteBinFill } from 'react-icons/ri';

const TodoItems = ({ todo, onToggle, onRemove }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
        } else {
            console.log('⛔️ Checkbox is NOT checked');
        }
        setIsChecked((current) => !current);
    };

    return (
        <Items>
            <div className="checkbox_wrap">
                <input
                    id="ListCheck"
                    type="checkbox"
                    onChange={handleChange}
                    value={isChecked}
                />
                {isChecked ? <FiCheckSquare /> : <FiSquare />}
                <label htmlFor="ListCheck">예제 텍스트</label>
            </div>
            <button className="del_btn">
                <RiDeleteBinFill />
            </button>
        </Items>
    );
};
const Todos = ({
    input, //인풋에 입력되는 텍스트
    todos, // 할 일 목록이 들어있는 객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>
            <div>
                <TodoItems />
                <TodoItems />
                <TodoItems />
                <TodoItems />
                <TodoItems />
                <TodoItems />
                <TodoItems />
                <TodoItems />
            </div>
        </div>
    );
};
export default Todos;

const Items = styled.li`
    display: flex;
    align-items: center;
    font-size: 1rem;

    & input {
        display: none;
    }

    & label + svg {
        width: 15px;
        height: 15px;

        margin-right: 8px;
    }

    & label {
        cursor: pointer;
    }

    & .del_btn {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;

        margin-left: auto;

        & svg {
            fill: #888;
            width: 100%;
            height: 100%;
        }
    }

    & + li {
        margin-top: 10px;
    }
`;
