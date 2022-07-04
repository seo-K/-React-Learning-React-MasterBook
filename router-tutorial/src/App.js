import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profiles from "./pages/Profiles";
import HistorySample from "./pages/HistorySample";

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link to="/history">History 예제</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path={["/about", "/info"]} component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={HistorySample} />
                {/* <Route path="/history" component={HistorySample} /> */}
                {/* <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        /> */}
                <Route
                    render={({ location }) => (
                        <div>
                            <h2>이 페이지는 존재하지 않습니다</h2>
                        </div>
                    )}
                />
            </Switch>
        </div>
    );
};

export default App;
