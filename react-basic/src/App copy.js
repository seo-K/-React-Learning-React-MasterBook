import React, { Component } from "react";

import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPracticeFunction from "./EventPracticeFunction";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

class App extends Component {
  scrollBox = React.createRef();

  render() {
    // return <MyComponent favoriteNumber={1}>리액트</MyComponent>;
    // return <Counter>리액트</Counter>;
    // return <Say />;
    // return <EventPractice />;
    // return <EventPracticeFunction />;
    // return <ValidationSample />;
    return <IterationSample />;

    // return (
    // <div>
    //   <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
    //   {/* 아래도 맞지만 컴포넌트가 처음 렌더링될 때는 this.scrollBox 값이 undefined이므로 오류가 발생할 수 있으므로 화살표 함수 문법 사용 */}
    //   {/* <button onClick={this.scrollBox.scrollToBottom}> */}
    //   <button onClick={() => this.scrollBox.scrollToBottom()}>
    //     맨 밑으로
    //   </button>
    // </div>
    // );
  }
}
export default App;
