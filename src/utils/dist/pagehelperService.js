"use strict";
exports.__esModule = true;
exports.returnNumberColor = void 0;
exports.returnNumberColor = function (oldvalue, number) {
    if (oldvalue > number) {
        return "text-red-500";
    }
    else if (oldvalue < number) {
        return "text-green-500";
    }
    return "text-white";
};
