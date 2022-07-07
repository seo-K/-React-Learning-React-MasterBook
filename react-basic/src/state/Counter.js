import React, { Component } from 'react';

// 비구조화할당 문법
class Counter extends Component {
  // 1. 컴포넌트에 state를 설정할때는 constructor 메서드 사용.
  // constructor(props) {
  //   super(props); // super(props) 호출!
  //   this.state = { // state의 초기값 설정하기
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  // 2. constructor 사용없이 바로 선언.
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state 로 조회합니다
    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값:{fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              // + callback 함수 추가
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            ); // setState(state + 1 ) 와 같음

            // 이전 번호 + 1 하는 작업
            // 1)
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });

            // 2)
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
