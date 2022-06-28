import React from "react";
import { useCallback, useState } from "react";
import "./MusicList.scss";

import MusicItem from "./MusicItem";

function MusicList({ musicList, onToggle, onRemove }) {
    return (
        <div className="box">
            <ul className="music-list">
                {musicList.map((list) => (
                    <MusicItem key={list.id} list={list} onToggle={onToggle} onRemove={onRemove} />
                ))}
            </ul>
        </div>
    );
}

export default MusicList;
