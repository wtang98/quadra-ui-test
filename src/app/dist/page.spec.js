"use strict";
exports.__esModule = true;
var react_1 = require("@testing-library/react");
var page_1 = require("./page");
describe("it renders", function () {
    react_1.render(React.createElement(page_1["default"], null));
    react_1.screen.debug();
});
