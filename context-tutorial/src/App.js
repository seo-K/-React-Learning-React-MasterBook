import React from "react";
import SelectColors from "./components/SelectColors";
import ColorBox from "./components/colorBox";
import { ColorProvider } from "./contexts/color";

// Provider 사용하여 value 값 변경하기
// Provider를 사용할때는 value 값을 명시해주어야 제대로 작동!

const App = () => {
    return (
        <ColorProvider>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    );
};

export default App;
