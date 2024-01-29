"use strict";
exports.__esModule = true;
exports.receiveMessage = exports.connectWebSocket = void 0;
exports.connectWebSocket = function () { return ({
    type: "WEBSOCKET_CONNECT"
}); };
exports.receiveMessage = function (message) { return ({
    type: "WEBSOCKET_MESSAGE",
    payload: message
}); };
