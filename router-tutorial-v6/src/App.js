import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useRoutes, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import HistorySample from "./pages/HistorySample";
import NavigateButton from "./component/NavigateButton";

// const AboutList = () =>
//     useRoutes([
//         { path: "/home", element: <About /> },
//         { path: "/users", element: <About /> },
//         { path: "/widgets", element: <About /> },
//     ]);

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">veloper 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      {/* 재사용 가능한 링크버튼 */}
      {/* <NavigateButton buttonTitle={"Route To"} route={"/your_route/"} isReplaced={false} /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/history" element={<HistorySample />} />
        {/* Rotue 하나에 여러개의 path 설정하가 */}
        {/* 1) react Hooks 사용 찾는중 */}
        {/* https://stackblitz.com/github/remix-run/react-router/tree/main/examples/multi-app?file=home%2FApp.jsx */}
        {/* 2) map 사용 */}
        {["/about", "/info", "/etc"].map((path, index) => (
          <Route path={path} element={<About />} key={index} />
        ))}
        {/* <Route path="/about" element={<About />} />
            <Route path="/info" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
