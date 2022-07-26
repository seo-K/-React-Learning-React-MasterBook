import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션이름
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 TODO를 등록함
const TOGGLE = 'todos/TOGGLE'; // TODO를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // TODO를 제거함

// 액션 생성 함수 만들기
// (1)
// export const changeInput = (input) => ({
//     type: CHANGE_INPUT,
//     input,
// });
// let id = 3; // insert가 호출될 때마다 1씩 더해집니다.
// export const insert = (text) => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false,
//     },
// });
// export const toggle = (id) => ({
//     type: TOGGLE,
//     id,
// });

// export const remove = (id) => ({
//     type: REMOVE,
//     id,
// });

// function todos(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input,
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo),
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo) =>
//                     todo.id === action.id
//                         ? { ...todo, done: !todo.done }
//                         : todo,
//                 ),
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter((todo) => todo.id !== action.id),
//             };
//         default:
//             return state;
//     }
// }

// (2)
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // insert가 호출될 때마다 1씩 더해집니다.

export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true,
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false,
        },
        {
            id: 3,
            text: '복습하기',
            done: false,
        },
    ],
};

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => ({
            ...state,
            input,
        }),

        [INSERT]: (state, { payload: todo }) => ({
            ...state,
            todos: state.todos.concat(todo),
        }),
        [TOGGLE]: (state, { payload: id }) => ({
            ...state,
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo,
            ),
        }),
        [REMOVE]: (state, { payload: id }) => ({
            ...state,
            todos: state.todos.filter((todo) => todo.id !== id),
        }),
    },
    initialState,
);

// immer 설치 후 ( 코드가 더 짧아지거나 자바스크립트 사용이 어려울 때)
// const todos = handleActions(
//     {
//         [CHANGE_INPUT]: (state, { payload: input }) =>
//             produce(state, (draft) => {
//                 draft.input = input;
//             }),
//         [INSERT]: (state, { payload: todo }) =>
//             produce(state, (draft) => {
//                 draft.todos.push(todo);
//             }),

//         [TOGGLE]: (state, { payload: id }) =>
//             produce(state, (draft) => {
//                 const todo = draft.todos.find((todo) => todo.id === id);
//                 todo.done = !todo.done;
//             }),

//         [REMOVE]: (state, { payload: id }) =>
//             produce(state, (draft) => {
//                 const index = draft.todos.findIndex((todo) => todo.id === id);
//                 draft.todos.splice(index, 1);
//             }),
//     },
//     initialState,
// );

export default todos;
