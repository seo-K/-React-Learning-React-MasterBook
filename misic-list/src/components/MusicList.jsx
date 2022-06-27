import React from "react";
import { useCallback, useState } from "react";
import "./MusicList.scss";

import MusicItem from "./MusicItem";

function MusicList({ chattingList }) {
    return (
        <ul className="chatting-list">
            {chattingList.map((list) => (
                <MusicItem key={list.id} list={list} />
            ))}
        </ul>
    );
}

export default MusicList;
