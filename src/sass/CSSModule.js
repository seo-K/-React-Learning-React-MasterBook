import React from "react";
import classNames from "classnames/bind";
import styles from "../CSSModule.module.scss";

const cx = classNames.bind(styles); // 미리 styles 에서 클래스를 받아오도록 설정하고

console.log(styles);

const CSSModule = () => {
  return (
    // 여러 클래스 이름 사용하기
    // 1. 기본
    // <div className={`${styles.wrapper} ${styles.inverted}`}>

    // 2. className 라이브러리 사용
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;

// npm add classnames
// theme 값은 그대로 가져오고 highlighted 의 true 여부에 따라 클래스가 적용되는 것.
// 1. 기본
//  <div className={`MyComponet ${theme} ${highlighted ? 'highlighted' : ''}`}></div>
// 2. classnames 라이브러리 사용
//  <div className={ClassNames( 'MyComponent', { highlighted }, theme)}></div>
