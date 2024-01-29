"use strict";
exports.__esModule = true;
exports.websocketError = exports.websocketClose = exports.websocketMessage = exports.websocketOpen = exports.WEBSOCKET_ERROR = exports.WEBSOCKET_CLOSE = exports.WEBSOCKET_MESSAGE = exports.WEBSOCKET_OPEN = void 0;
// actions.js
exports.WEBSOCKET_OPEN = "WEBSOCKET_OPEN";
exports.WEBSOCKET_MESSAGE = "WEBSOCKET_MESSAGE";
exports.WEBSOCKET_CLOSE = "WEBSOCKET_CLOSE";
exports.WEBSOCKET_ERROR = "WEBSOCKET_ERROR";
exports.websocketOpen = function () { return ({ type: exports.WEBSOCKET_OPEN }); };
exports.websocketMessage = function (payload) { return ({
    type: exports.WEBSOCKET_MESSAGE,
    payload: payload
}); };
exports.websocketClose = function () { return ({ type: exports.WEBSOCKET_CLOSE }); };
exports.websocketError = function (payload) { return ({
    type: exports.WEBSOCKET_ERROR,
    payload: payload
}); };
