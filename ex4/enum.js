"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showColor = exports.Color = void 0;
var Color;
(function (Color) {
    Color["RED"] = "Red";
    Color["GREEN"] = "Green";
    Color["BLUE"] = "Blue";
})(Color || (exports.Color = Color = {}));
var showColor = function (color) {
    return color;
};
exports.showColor = showColor;
