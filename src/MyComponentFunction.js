import React from 'react';
import PropTypes from 'prop-types';

// 비구조화할당 문법
const MyComponet = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요 제 이름은 {name}입니다.
      <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

// const MyComponet = (props) => {
//     // 비구조화할당
//     // 구조 분해 문법

//     const { name, children } = props;
//     return (
//       <div>
//         안녕하세요 제 이름은 {name}입니다.
//         <br />
//         children 값은 {children}
//         입니다.
//       </div>
//     );
//   };

// 컴포넌트 선언 시 props 값을 입력하지 않으면 나오는 default value
MyComponet.defaultProps = {
  name: '기본 이름',
};

MyComponet.propTypes = {
  // name 값은 무조건 string 형태로 전달해야함
  name: PropTypes.string,
  // required 로 꼭 넣어줘야 하는 값
  favoriteNumber: PropTypes.number.isRequired,

  // 그 밖의 PropTypes 종류
  // 1. array 배열
  // 2. arrayOf(다른Proptype) : 특정 Proptype으로 이루어진 배열을 의미합니다. 예를들어 arrayOf(Proptypes.number)는 숫자로 이루어진 배열입니다.
  // 3. bool : true 혹은 false 값
  // 4. func : 함수
  // 5. numver : 숫자
  // 6. object: 객체
  // 7. string : 문자열
  // 8. symbol : ES6의 Symbol
  // 9. node : 렌더링할 수 있는 모든 것(숫자, 문자열, 혹은 JSX코드, children도 node Proptype 입니다.)
  // 10. instanceOf(클래스): 특정 클래스의 인스턴스 (ex) instanceOf(MyClass)
  // 11. oneOf(['dog','cat']) : 주어진 배열 요소 중 값 하나
  // 12. onOfType([React.Proptypes.string, PropTypes.number]) : 주어진 배열 안의 종류중 하나
  // 13. objectOf(React.Pproptypes.number) : 객체의 모든 키 값이 인자로 주어진 PrpsType인 객체
  // 14. shape ({name:Proptypes.stringm num:ProprTypes.number}) : 주어진 ㅅ키마를 가진 객체
  // 15. any : 아무종류
};

export default MyComponet;
