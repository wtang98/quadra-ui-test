import React, { useEffect } from "react";
import { updateNumber } from "../redux/slice";
import { returnNumberColor } from "./pagehelperService";

const useMainPageHook = (url: string, dispatch: any) => {
    const oldvalue = React.useRef(0);
    const [numberColor, setnumberColor] = React.useState("text-white");

    const handleMessage = (event: { data: number }) => {
        dispatch(updateNumber(event.data));
        const numberColor = returnNumberColor(oldvalue.current, event.data);
        setnumberColor(numberColor);
        oldvalue.current = event.data;
    };

    useEffect(() => {
        const socket = new WebSocket(url);
        const handleOpen = (event: any) =>
            console.log("WebSocket connection opened:", event);
        const handleClose = (event: any) =>
            console.log("WebSocket connection closed:", event);

        socket.addEventListener("open", handleOpen);
        socket.addEventListener("message", handleMessage);
        socket.addEventListener("close", handleClose);

        // Cleanup on component unmount
        return () => {
            socket.close();
            socket.removeEventListener("open", handleOpen);
            socket.removeEventListener("message", handleMessage);
            socket.removeEventListener("close", handleClose);
        };
    }, []); // Reconnect if the URL changes

    return { numberColor };
};

export default useMainPageHook;
