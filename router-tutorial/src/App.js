import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useRoutes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

// const AboutList = () =>
//     useRoutes([
//         { path: "/home", element: <About /> },
//         { path: "/users", element: <About /> },
//         { path: "/widgets", element: <About /> },
//     ]);

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
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
    );
}

export default App;
