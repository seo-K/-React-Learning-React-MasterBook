import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./Main";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPracticeFunction from "./EventPracticeFunction";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
console.log("나엄ㅁ?");

export default function App() {
  // 랜덤 색상을 생성합니다.
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  const [color, setColor] = useState("#000000");

  const handleClick = () => {
    setColor({ color: getRandomColor() });
  };
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route
          path="/props"
          element={<MyComponent favoriteNumber={1}>리액트</MyComponent>}
        />
        <Route path="/state" element={<Counter>리액트</Counter>} />
        <Route path="/state/2" element={<Say />} />
        <Route path="/event" element={<EventPractice />} />
        <Route path="/event/function" element={<EventPracticeFunction />} />
        <Route path="/ref" element={<ValidationSample />} />
        <Route path="/ref/scroll" element={<ScrollBox />} />
        {/* <Route
          path="/ref/scroll"
          element={
            <div>
              <button onClick={this.handleClick}>랜덤 색상</button>
              <ErrorBoundary>
                <LifeCycleSample color={color} />
              </ErrorBoundary>
            </div>
          }
        /> */}
      </Route>
    </Routes>
  );
}
