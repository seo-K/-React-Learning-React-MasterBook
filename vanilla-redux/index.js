// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 1. action ( 액션 )
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 2. action creator ( 액션 생성 함수 )
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값 설정
const initialState = {
    toggle: false,
    counter: 0,
};

// 3. reducer ( 리듀서 )
// state가 undefined일때, initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지
                toggle: !state.toggle,
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
    }
}

console.log(state, "누구야");
// 4. store ( 스토어 )
const store = createStore(reducer);

// 4-1. render (스토어 내장 함수 랜더)
const render = () => {
    const state = store.getState(); // 현재 상태 불러옴
    //토글처리
    if (state.toggle) {
        divToggle.classList.add("active");
        console.log("눌리긴함ㅇ");
    } else {
        divToggle.classList.remove("active");
    }
    //카운터 처리
    counter.innerText = state.counter;
};

render();

// 6. subscribe ( 구독 )
store.subscribe(render);

// 5. dispatch ( 디스패치 ) -> 액션 발생
divToggle.onClick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onClick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onClick = () => {
    store.dispatch(decrease());
};
