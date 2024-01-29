"use strict";
exports.__esModule = true;
exports.updateNumber = exports.slice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    value: {
        number: 0
    }
};
exports.slice = toolkit_1.createSlice({
    name: "connect",
    initialState: initialState,
    reducers: {
        updateNumber: function (state, action) {
            return {
                value: {
                    number: action.payload
                }
            };
        }
    }
});
exports.updateNumber = exports.slice.actions.updateNumber;
exports["default"] = exports.slice.reducer;
