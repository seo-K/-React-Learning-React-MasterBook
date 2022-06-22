import React, { useReducer } from "react";
import useInputs from "./useinputs";

// function reducer(state, action) {
//   return {
//     // ...state,
//     // [action.name]: action.value,
//   };
// }

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  // const [state, dispatch] = useReducer(reducer, {
  //   name: "",
  //   nickname: "",
  // });

  // const [name, nickname] = state;

  // const onChange = (e) => {
  //   dispatch(e.target);
  // };

  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <>
      <main>
        <div>
          <input name="name" value={name} onChange={onChange} />
          <input name="nickname" value={nickname} onChange={onChange} />
        </div>
        <div>
          <p>
            <b>이름:</b> {name}
          </p>
          <p>
            <b>닉네임: </b> {nickname}
          </p>
        </div>
      </main>
    </>
  );
};

export default Info;
