import React from "react";
import { useCallback, useState } from "react";
import { TbSend } from "react-icons/tb";

import "./MusicInsert.scss";

function MusicInsert() {
    return (
        <form>
            <div className="input-wrap">
                <input type="text" placeholder="Type yout message!" />
                <button>
                    <TbSend />
                </button>
            </div>
        </form>
    );
}

export default MusicInsert;
