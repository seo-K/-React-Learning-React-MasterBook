import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
// 액션 생성 함수가 많아지면 사용하는 유틸함수
import { bindActionCreators } from 'redux';

// (2) 함수 내부 선언
import { increase, decrease } from '../modules/counter';

// 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부름.
const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();

    // 성능 최적활 위해 useCallback 사용 == useStore와 단짝
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

// mapStateToProps, mapDispatchToProps 등 에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달됨.
// 1. mapStateToProps 함수는 state를 파라미터로 받아오며, 이 값은 현재 스토어가 지니고 있는 상태를 가리킴.
// 2. mapDispatchToProps 함수는 store의 내장 함수 dispatch 를 파라미터로 받아옴..

// (1) 함수 외부 선언
// const mapStateToProps = state => ({
//     number : state.counter.number,
// })

// const mapDispatchToProps = dispatch => ({
//     // 임시 함수
//     increase: () => {
//          console.log(+1)
//         // dispatch(increase());
//     },
//     decrease: () => {
//         // dispatch(decrease())
//         console.log(-1)
//     }
// })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer)

// (2) 함수 내부 선언
// export default connect(
//     state => ({
//         number : state.counter.number,
//     }),
//     dispatch => ({
//         increase: () => dispatch(increase()),
//         decrease: () => dispatch(decrease()),
//     }),
// )(CounterContainer)

// (3) bindActionCreator 사용 (액션 함수 많을 시 사용하는 유틸함수)
export default connect(
    (state) => ({
        number: state.counter.number,
    }),
    (dispatch) =>
        bindActionCreators(
            {
                increase,
                decrease,
            },
            dispatch,
        ),
)(CounterContainer);
