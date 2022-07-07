import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const WithRouterSample = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  //   withRouter Hook이란?
  // 라우트 컴포넌트가 아닌곳(일반 컴포넌트)에서 match, location, history를 사용해야할 때 쓰였다

  //   withRouter, useRouteMatch, match 사라짐
  // match객체가 사라지고, 이를 대신 해줬던거 같은 useRouteMatch가 있었으나 이것 또한 이번에 사라졌다
  // 그리고 withRouter도 사라짐에 따라 이를 대체해서 사용하는 예시가 나왔다

  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly={true} />
      <h4>match</h4>
      <textarea value={JSON.stringify(params)} rows={7} readOnly={true} />
      <button onClick={() => navigate(`/`)}>홈으로</button>
    </div>
  );
};
// widthRouter 를 사용할 내보내줄 컴포넌트를 함수로 감쌈.
export default WithRouterSample;
