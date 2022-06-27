import React from "react";
import { useCallback, useState } from "react";
import { MdOutlineArrowBack, MdMoreVert, MdWifi, MdOutlineSignalCellularAlt, MdBattery80 } from "react-icons/md";
import "./MusicListTemplate.scss";

function MusicListTemplate({ children }) {
    return (
        <div className="wrap">
            <div className="phone-wrap">
                <div className="notch">
                    <div className="time">12:28</div>
                    <div className="util">
                        <div className="signal-icon">
                            <MdOutlineSignalCellularAlt />
                        </div>
                        <div className="wifi-icon">
                            <MdWifi />
                        </div>
                        <div className="battery-icon">
                            <MdBattery80 />
                        </div>
                    </div>
                </div>
                <header>
                    <button type="button" className="icon-wrap">
                        <MdOutlineArrowBack />
                    </button>
                    <p className="title">Chatting</p>
                    <button type="button" className="icon-wrap">
                        <MdMoreVert />
                    </button>
                </header>
                <main>{children}</main>
            </div>
        </div>
    );
}

export default MusicListTemplate;
