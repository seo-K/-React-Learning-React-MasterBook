import { useEffect, useState } from "react";

const InfoUseEffect = () => {
  const [name, setName] = useState("");
  const [nikname, setNikname] = useState("");

  // useEffect 사용
  // 두번째 파라미터 [] 에 넣는 값이 바뀔때만 실행되게해준다 === componentDidUpdate
  // 빈값 [] 은 페이지 마운트될때 1번만 실행됨.

  useEffect(() => {
    console.log("effect");
    console.log(name);
    // console.log({
    //   name,
    //   nikname,
    // });

    // 언마운트 되기전  OR 업데이트 되기 직전에 어떤 작업을 수행하고 싶다면 사용
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNikeName = (e) => {
    setNikname(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          value={name}
          onChange={onChangeName}
          placeholder="이름을 입력하세요"
        />
        <input
          value={nikname}
          onChange={onChangeNikeName}
          placeholder="닉네임을 입력하세요"
        />
      </div>
      <div>
        <p>이름: {name}</p>
        <p>닉네임: {nikname}</p>
      </div>
    </div>
  );
};

export default InfoUseEffect;
