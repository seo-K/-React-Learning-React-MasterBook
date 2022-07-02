import "./App.css";
import { useRef, useState, useCallback } from "react";
import produce from "immer";

// immer == 불변성에 신경쓰지 않는 것처럼 코드를 작성하되, 불변성 관리는 제대로 해주는 라이브러리 == 배열처리 및 깊은 곳에 위치하는 값을 바꾸는 것에 이용

// produce = 두가지 파라미터를 받음.
// 1번째 파라미터는 수정하고 싶은 상태.
// 2번째 파라미터는 상태를 어떻게 업데이트할지 정의하는 함수.
// 전달되는 함수 내부에서 원하는 값을 변경하면, produce 함수가 불변성 유지를 대신해주면서 새로운 상태를 생성해줌.

// const nextState = produce(originalState, draft => {
//   // 바꾸고 싶은 값 바꾸기
//   draft.somewhere.deep.inside = 5;
// })
const App = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({ name: "", username: "" });
    const [data, setData] = useState({
        array: [],
        uselessValue: null,
    });

    // input 수정을 위한 함수
    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setForm(
                produce((draft) => {
                    draft[name] = value;
                })
            );
            // setForm({
            //     ...form,
            //     [name]: [value],
            // });
        },
        [form]
    );

    // form 등록을 위한 함수
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.username,
            };

            // 1) array에 새 항목 등록
            setData(
                produce(data, (draft) => {
                    draft.array.push(info);
                })
            );
            // 2) array에 새 항목 등록
            // setData({
            //     ...data,
            //     array: data.array.concat(info),
            // });

            // form 초기화
            setForm({
                name: "",
                username: "",
            });
            nextId.current += 1;
        },
        [data, form.name, form.username]
    );

    // 항목을 삭제하는 함수
    const onRemove = useCallback(
        (id) => {
            setData(
                produce(data, (draft) => {
                    draft.array.splice(
                        draft.array.findIndex((info) => info.id === id),
                        1
                    );
                })
            );
            // setData({
            //     ...data,
            //     array: data.array.filter((info) => info.id !== id),
            // });
        },
        [data]
    );

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="username" placeholder="아이디" value={form.username} onChange={onChange} />
                <input name="name" placeholder="이름" value={form.name} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                <ul>
                    {data.array.map((info) => (
                        <li key={info.id} onClick={() => onRemove(info.id)}>
                            {info.username} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
