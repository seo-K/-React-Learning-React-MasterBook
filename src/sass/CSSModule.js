import React from "react";
// import classNames from 'classnames/bind';
import styles from "../CSSModule.module.scss";

// const cx = classNames.bind(styles); // 미리 styles 에서 클래스를 받아오도록 설정하고
console.log(styles);
const CSSModule = () => {
  return (
    // <div className={cx("wrapper", "inverted")}>
    // 여러 클래스 이름 사용하기
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
