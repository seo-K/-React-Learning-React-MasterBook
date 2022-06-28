import React from "react";
import { useCallback, useState } from "react";
import { TbSend } from "react-icons/tb";
import "./MusicInsert.scss";

function MusicInsert({ onInsert }) {
    const [value, setValue] = useState("");

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();

            onInsert(value);
            setValue("");
        },
        [onInsert, value]
    );

    return (
        <form onSubmit={onSubmit}>
            <div className="input-wrap">
                <input type="text" value={value} onChange={onChange} placeholder="Type yout message!" />
                <button>
                    <div className="icon-wrap">
                        <TbSend />
                    </div>
                </button>
            </div>
        </form>
    );
}

export default MusicInsert;
