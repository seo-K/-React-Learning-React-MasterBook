import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Main from './Main';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeFunction from './EventPracticeFunction';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

export default function App() {
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
    </Route>
  </Routes>;
}
