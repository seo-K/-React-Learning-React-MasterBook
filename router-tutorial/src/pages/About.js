import React from "react";
import qs from "qs";

// npm add qs
// http://localhost:3000/about?detail=true
// "true" "1" 와 같이 문자열로 받아짐. boolean 값이라도 다 문자열로 받아짐.
// search 값을 확인하려면 이 문자열을 객체 형태로 변환해줘야함.
// 쿼리 문자열을 객체로 변환할 때는 qs라는 라이브러리 사용.

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        // parse 숫자를 계산하거나 현재 시간을 출력하거나 문자열의 형태에 따라 변하는 내용을 출력하는 등 상황에 따라 변하는 텍스트를 입력할 때 사용하는 함수
        ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다
    });
    const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열입니다.
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초 실습 프로젝트</p>
            {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    );
};

export default About;
