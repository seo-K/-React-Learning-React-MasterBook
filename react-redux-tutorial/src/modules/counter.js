// redux-actions 다운로드 한 뒤,
// createAction 사용하면 매번 객체를 직접 만들어 줄 필요없이 더욱 간단하넥 액션 생성함수를 선언할 수 있음
import { createAction, handleActions } from 'redux-actions';

// 액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 1) 생코딩
// 액션 생성 함수 만들기
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1,
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1,
//             };
//         default:
//             return state;
//     }
// }

// 2) redux-actions 다운로드 후 정리된 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
    number: 0,
};

// 첫번째 파라미터 = 각 액션에 대한 업데이트 함수
// 두번째 파라미터 = 초기상태
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
);

export default counter;
