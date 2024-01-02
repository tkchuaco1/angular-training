"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.length * this.width;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
