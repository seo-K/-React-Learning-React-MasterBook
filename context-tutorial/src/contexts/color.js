import { createContext, useState } from "react";

// const ColorContext = createContext({ color: "black" });
const ColorContext = createContext({
    state: { color: "black", subcolor: "red" },
    actions: {
        setColor: () => {},
        setSubColor: () => {},
    },
});

const ColorProvider = ({ childeren }) => {
    const [color, setColor] = useState("black");
    const [subColor, setSubColor] = useState("red");

    const value = {
        state: { color, subColor },
        actions: { setColor, setSubColor },
    };

    return <ColorContext.Provider value={value}>{childeren}</ColorContext.Provider>;
};

// const ColorConsumer = ColorContext.Consumer 과 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider 과 ColroConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
