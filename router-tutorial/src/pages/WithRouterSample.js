import React from "react";
import { withRouter } from "react-router-dom";

const WithRouterSample = ({ location, match, history }) => {
    return (
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly={true} />
            <h4>match</h4>
            <textarea value={JSON.stringify(match, null, 2)} rows={7} readOnly={true} />
            <button onClick={() => history.push(`/`)}>홈으로</button>
        </div>
    );
};
// widthRouter 를 사용할 내보내줄 컴포넌트를 함수로 감쌈.
export default withRouter(WithRouterSample);
