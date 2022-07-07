import React from "react";
import { useParams } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};

const Profile = () => {
  const href = useHref();
  // https://codesandbox.io/s/mz7ll88v8?file=/src/index.js
  function useHref() {
    const [href, setHref] = React.useState(window.location.href);
    const listener = React.useCallback((href) => {
      setHref(window.location.href);
    });
    React.useEffect(() => {
      window.addEventListener("popstate", listener);
      return () => {
        window.removeEventListener("popstate", listener);
      };
    });
    return href;
  }

  // 원랜 match 함수로 보내줘야하지만 이젠 useParams 함수로 바로 가져올 수 있음.
  // const { username } = match.params;
  const { username } = useParams();
  // console.log(username);

  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      {/* {href} */}
      <WithRouterSample />
    </div>
  );
};

export default Profile;
