"use strict";
exports.__esModule = true;
var react_1 = require("react");
var slice_1 = require("../redux/slice");
var pagehelperService_1 = require("./pagehelperService");
var useMainPageHook = function (url, dispatch) {
    var oldvalue = react_1["default"].useRef(0);
    var _a = react_1["default"].useState("text-white"), numberColor = _a[0], setnumberColor = _a[1];
    var handleMessage = function (event) {
        dispatch(slice_1.updateNumber(event.data));
        var numberColor = pagehelperService_1.returnNumberColor(oldvalue.current, event.data);
        setnumberColor(numberColor);
        oldvalue.current = event.data;
    };
    react_1.useEffect(function () {
        var socket = new WebSocket(url);
        var handleOpen = function (event) {
            return console.log("WebSocket connection opened:", event);
        };
        var handleClose = function (event) {
            return console.log("WebSocket connection closed:", event);
        };
        socket.addEventListener("open", handleOpen);
        socket.addEventListener("message", handleMessage);
        socket.addEventListener("close", handleClose);
        // Cleanup on component unmount
        return function () {
            socket.close();
            socket.removeEventListener("open", handleOpen);
            socket.removeEventListener("message", handleMessage);
            socket.removeEventListener("close", handleClose);
        };
    }, []); // Reconnect if the URL changes
    return { numberColor: numberColor };
};
exports["default"] = useMainPageHook;
