import React, { Component, useCallback, useContext, useEffect, NavigationContext } from "react";
import { useNavigate } from "react-router-dom";
// import Block from "./Block";
// 클래스형 함수의 변경
// class HistorySample extends Component {
// export default HistorySample;

// export const widthRouter = (Component) => {
//   const Wrapper = (props) => {
//     const navigate = useNavigate();

//     return <Component navigate={navigate} {...props} />;
//   };

//   return Wrapper;
// };

// componentDidMount componentWillUnmount 를 useEffect 사용하여 작업
// export function useBlocker(blocker, when = true) {
//   const { navigator } = useContext(NavigationContext);

//   useEffect(() => {
//     if (!when) return;

//     const unblock = navigator.block((tx) => {
//       const autoUnblockingTx = {
//         ...tx,
//         retry() {
//           unblock();
//           tx.retry();
//         },
//       };
//       blocker(autoUnblockingTx);
//     });
//     return unblock;
//   }, [navigator, blocker, when]);
// }

// export function usePrompt(message, when = true) {
//   const blocker = useCallback(
//     (tx) => {
//       //   eslint-disable-next-line no-alert
//       if (window.confirm(message)) tx.retry();
//     },
//     [message]
//   );

//   useBlocker(blocker, when);
// }

export default function HistorySample() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  //홈으로 이동
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
}
