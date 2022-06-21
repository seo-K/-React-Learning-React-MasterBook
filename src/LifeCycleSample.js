import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; //ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor = 클래스 생성자 매서드");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps = props의 state 값을 넣을때");

    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log(
      "componentDidMount = 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드",
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponetUpdate = 컴포넌트의 리렌더링을 결정하는 메서드",
      nextProps,
      nextState,
    );
    // 숫자의 마지막 자리가 '4' 라면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log(
      "componentWillUnmount = 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드",
    );
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate = 컴포넌트의 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드﻿",
    );
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "componentDidUpdate  = 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드",
      prevProps,
      prevState,
    );
    if (snapshot) {
      console.log("업데이트 되기 직전 색상", snapshot);
    }
  }

  render() {
    console.log("render = 랜더링 메서드");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* 코드에러 예시 */}
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
