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
            // 새로운 리스트 정리
            const newList = {
                id: nextId.current,
                text,
                block: false,
            };
            // 기존 값에 추가하기
            setMusicList(musicList.concat(newList));

            // 새로운 id 값 부여
            nextId.current += 1;
        },
        [musicList]
    );

    // remove 기능
    const onRemove = useCallback(
        (id) => {
            setMusicList(musicList.filter((list) => list.id !== id));
        },
        [musicList]
    );

    // toggle 기능
    const onToggle = useCallback(
        (id) => {
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
