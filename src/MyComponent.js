import React from 'react';
import PropTypes from 'prop-types';

// 비구조화할당 문법
const MyComponet = ({ name, children }) => {
  return (
    <div>
      안녕하세요 제 이름은 {name}입니다.
      <br />
      children 값은 {children}
      입니다.
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
};

export default MyComponet;
