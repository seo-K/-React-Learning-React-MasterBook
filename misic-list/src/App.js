import logo from "./logo.svg";
import "./App.css";

import MusicListTemplate from "./components/MusicListTemplate";
import MusicInsert from "./components/MusicInsert";
import MusicList from "./components/MusicList";
import { useState } from "react";

function App() {
    const [chattingList, setChattingList] = useState([
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
    return (
        <MusicListTemplate>
            <MusicList chattingList={chattingList} />
            <MusicInsert />
        </MusicListTemplate>
    );
}

export default App;
