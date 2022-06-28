import logo from "./logo.svg";
import "./App.css";

import MusicListTemplate from "./components/MusicListTemplate";
import MusicInsert from "./components/MusicInsert";
import MusicList from "./components/MusicList";
import { useRef, useState, useCallback } from "react";

function App() {
    const [musicList, setMusicList] = useState([
        {
            id: 0,
            text: "My Favorite Music",
            block: true,
        },
        {
            id: 1,
            text: "My Favorite Music2",
            block: false,
        },
        {
            id: 2,
            text: "My Favorite Music3",
            block: true,
        },
    ]);

    // 고윳값으로 사용될 id
    const nextId = useRef(4);

    const onInsert = useCallback(
        (text) => {
            const newList = {
                id: nextId.current,
                text,
                block: false,
            };

            setMusicList(musicList.concat(newList));
            nextId.current += 1;
        },
        [musicList]
    );

    // remove 기능
    const onRemove = useCallback(
        (id) => {
            // 눌렀을때 같지않은 id만 필터링해서 보여줌
            setMusicList(musicList.filter((list) => list.id !== id));
        },
        [musicList]
    );

    // toggle 기능
    const onToggle = useCallback(
        (id) => {
            // map 함수 사용하여, list.id === 클릭한id ? [...list] block을 반대값으로 수정 : 그대로의 상태를 반환
            setMusicList(musicList.map((list) => (list.id === id ? { ...list, block: !list.block } : list)));
        },
        [musicList]
    );

    return (
        <MusicListTemplate>
            <MusicList musicList={musicList} onToggle={onToggle} onRemove={onRemove} />
            <MusicInsert onInsert={onInsert} />
        </MusicListTemplate>
    );
}

export default App;
