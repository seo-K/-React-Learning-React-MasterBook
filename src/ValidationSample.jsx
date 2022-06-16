import React, { Component, useState } from 'react';
import './ValidationSample.css';

// 유효성 검사 샘플
class ValidationSample extends Component {
  // createRef 리액트에 내장된 함수
  // 1. ref 셋팅 = 컴포넌트 내부에서 멤버 변수로 React.createRef() 를 담아주기
  // 2. ref를 달고자 하는 요소에 ref props 로 넣어주기
  // 3. ref를 설정해준 DOM에 접근을 위해 this.input.current 를 조회하면 됨

  // (1)
  input = React.createRef();

  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });

    //(3)
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input
          // (2)
          ref={this.input}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
