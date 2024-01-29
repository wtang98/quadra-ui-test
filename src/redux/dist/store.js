"use strict";
exports.__esModule = true;
exports.useAppSelector = exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var slice_1 = require("./slice");
var react_redux_1 = require("react-redux");
exports.store = toolkit_1.configureStore({
    reducer: {
        fileReducer: slice_1["default"]
    }
});
exports.useAppSelector = react_redux_1.useSelector;
