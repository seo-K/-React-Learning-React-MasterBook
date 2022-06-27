import React from "react";
import { useCallback, useState } from "react";
import "./MusicItem.scss";
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineDelete, AiOutlineEllipsis } from "react-icons/ai";

import UserImg from "../assets/img/user.jpg";

function MusicItem({ list, onToggle }) {
    const { text, id, block } = list;

    const [optionOpen, setOptionOpen] = useState(false);

    return (
        <li>
            <div className="user-img">
                <img src={UserImg} alt="user-img" />
            </div>
            <div className="text">{text}</div>
            <div className="util">
                <button onClick={() => setOptionOpen(!optionOpen)}>
                    <AiOutlineEllipsis />
                </button>
                {optionOpen && (
                    <div className="option-wrap">
                        <button>
                            <AiOutlineDelete />
                        </button>

                        <button onToggle={onToggle}>{block ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button>
                    </div>
                )}
            </div>
        </li>
    );
}

export default MusicItem;
