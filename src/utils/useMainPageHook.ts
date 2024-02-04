import React from "react";
import { returnNumberColor } from "./pagehelperService";
import { AppDispatch, useAppSelector } from "../redux/store";
import { useDispatch } from "react-redux";
import { colorDictonary, mainPageHooksReturnType } from "../types/types";

const useMainPageHook = (): mainPageHooksReturnType => {
    const dispatch = useDispatch<AppDispatch>();
    const number = useAppSelector(({ fileReducer }) => fileReducer.number);
    const oldvalue = React.useRef(0);
    const [numberColor, setNumberColor] = React.useState<colorDictonary>(
        colorDictonary.white
    );

    const handleMessage = (message: number) => {
        const numberColor = returnNumberColor(oldvalue.current, message);
        setNumberColor(numberColor);
        oldvalue.current = message;
    };

    React.useEffect(() => {
        handleMessage(number);
    }, [number]);

    React.useEffect(() => {
        dispatch({ type: "socket/connect" });
        return () => {
            dispatch({ type: "socket/disconnect" });
        };
    }, []);

    return { numberColor, number };
};

export default useMainPageHook;
