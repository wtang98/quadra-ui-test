"use strict";
exports.__esModule = true;
exports.updateNumber = exports.auth = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    value: {
        number: 0
    }
};
exports.auth = toolkit_1.createSlice({
    name: "auth",
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
exports.updateNumber = exports.auth.actions.updateNumber;
exports["default"] = exports.auth.reducer;
