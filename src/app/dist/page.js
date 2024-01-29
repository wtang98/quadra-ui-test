"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var store_1 = require("../redux/store");
var useMainPageHook_1 = require("../utils/useMainPageHook");
var page = function () {
    var dispatch = react_redux_1.useDispatch();
    var number = store_1.useAppSelector(function (_a) {
        var fileReducer = _a.fileReducer;
        return fileReducer.value.number;
    });
    var numberColor = useMainPageHook_1["default"]("ws://localhost:8080", dispatch).numberColor;
    return (react_1["default"].createElement("div", { className: "flex justify-center items-center bg-zinc-700 h-screen w-full" },
        react_1["default"].createElement("div", { className: "flex flex-col items-center" },
            react_1["default"].createElement("div", { className: "text-white" }, "Quadra Test"),
            react_1["default"].createElement("div", { className: "rounded p-3 bg-zinc-800 min-w-28 flex justify-center" },
                react_1["default"].createElement("p", { className: numberColor }, number)))));
};
exports["default"] = page;
