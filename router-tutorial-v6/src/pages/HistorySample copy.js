import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

// 클래스형 함수의 변경
// class HistorySample extends Component {
// export default HistorySample;

export default class HistorySample extends React.Component {
  // var navigate = useNavigate();
  // 뒤로가기
  handleGoBack = () => {
    // navigate.goBack();
  };
  //홈으로 이동
  handleGoHome = () => {
    // navigate.push("/");
  };

  componentDidMount() {
    //이것을 설정하고 나면 페이지에 변화가 생기려고할때마다 정말 나갈 것 인지 질문함
    this.unblock = this.props.navigate.block("정말 떠나실 건가요?");
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트되면 질문을 멈춤
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

// useEffect 사용 (확인해야함)
// function HistorySample({ history }) {
//   useEffect(() => {
//     const unblock = history.block('이 페이지를 나가시겠습니까?');
//      return () => {
//       unblock();
//     };
//   }, [history]);

// return ( ... );
// }
