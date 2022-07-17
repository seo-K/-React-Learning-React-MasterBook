import React from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';

// 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부름.
const CounterContainer = ({number,increase, decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
}


// mapStateToProps, mapDispatchToProps 등 에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달됨.
// 1. mapStateToProps 함수는 state를 파라미터로 받아오며, 이 값은 현재 스토어가 지니고 있는 상태를 가리킴.
// 2. mapDispatchToProps 함수는 store의 내장 함수 dispatch 를 파라미터로 받아옴..

const mapStateToProps = state => ({
    number : state.counter.number,
})

const mapDispatchToProps = dispatch => ({
    // 임시 함수
    increase: () => {
         console.log(+1)
        // dispatch(increase());
    },
    decrease: () => {
        // dispatch(decrease())
        console.log(-1)
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer)