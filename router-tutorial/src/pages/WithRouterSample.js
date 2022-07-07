import React from "react";
import { withRouter } from "react-router-dom";

const WithRouterSample = ({ location, match, history }) => {
    return (
        <div>
            <h4>location</h4>
            {/* // stringify 의 두번재 파라미터와 세번째 파라미터를 위와 같이 null, 2 로 설정해주면 JSON에 들여쓰기가 적용된 상태로 문자열이 만들어짐. */}
            <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly={true} />
            <h4>match</h4>
            <textarea value={JSON.stringify(match, null, 2)} rows={7} readOnly={true} />
            <button onClick={() => history.push(`/`)}>홈으로</button>
        </div>
    );
};
// widthRouter 를 사용할 내보내줄 컴포넌트를 함수로 감쌈.
export default withRouter(WithRouterSample);
