"use strict";
exports.__esModule = true;
var pagehelperService_1 = require("./pagehelperService");
describe("returnNumberColor", function () {
    it("te", function () {
        var result = pagehelperService_1.returnNumberColor(1, 2);
        expect(result).toBe("text-green-500");
    });
    it("te", function () {
        var result = pagehelperService_1.returnNumberColor(2, 1);
        expect(result).toBe("text-red-500");
    });
    it("te", function () {
        var result = pagehelperService_1.returnNumberColor(1, 1);
        expect(result).toBe("text-white");
    });
});
