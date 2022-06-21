import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import MyComponent from "./props/MyComponent";
import Counter from "./state/Counter";
import Say from "./state/Say";
import EventPractice from "./event/EventPractice";
import EventPracticeFunction from "./event/EventPracticeFunction";
import ValidationSample from "./ref/ValidationSample";
import ScrollBox from "./ref/ScrollBox";
import IterationSample from "./map/IterationSample";
import LifeCycleSample from "./livecycle/LifeCycleSample";
import ErrorBoundary from "./livecycle/ErrorBoundary";

export default function App() {
  // REF

  // LIFECYCLE
  // 랜덤 색상을 생성합니다.
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  const [color, setColor] = useState("#000000");
  const handleClick = () => {
    setColor({ color: getRandomColor() });
  };

  // state = {
  //   color: "#000000",
  // };

  // handleClick = () => {
  //   this.setState({
  //     color: getRandomColor(),
  //   });
  // };

  // <div>
  //       <button onClick={this.handleClick}>랜덤 색상</button>
  //       <ErrorBoundary>
  //         <LifeCycleSample color={this.state.color} />
  //       </ErrorBoundary>
  //     </div>
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route
          path="/props"
          element={<MyComponent favoriteNumber={1}>리액트</MyComponent>}
        />
        <Route path="/state" element={<Counter>리액트</Counter>} />
        <Route path="/state-2" element={<Say />} />
        <Route path="/event" element={<EventPractice />} />
        <Route path="/event-function" element={<EventPracticeFunction />} />
        <Route path="/ref" element={<ValidationSample />} />
        <Route path="/ref-scroll" element={<ScrollBox />} />
        <Route path="/map" element={<IterationSample />} />
        <Route
          path="/lifecycle"
          element={
            <div>
              <button onClick={handleClick}>랜덤 색상</button>
              <ErrorBoundary>
                <LifeCycleSample color={color} />
              </ErrorBoundary>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
