import React from "react";
import ColorBox from "./components/colorBox";
import ColorContext from "./contexts/color";

// Provider 사용하여 value 값 변경하기

const App = () => {
    return (
        <ColorContext.Provider value={{ color: "red" }}>
            <div>
                <ColorBox />
            </div>
        </ColorContext.Provider>
    );
};

export default App;
