"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInteger = exports.calculateFactorial = void 0;
// tính giai thừa
var calculateFactorial = function (n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * (0, exports.calculateFactorial)(n - 1);
    }
};
exports.calculateFactorial = calculateFactorial;
// check số nguyên
var isInteger = function (value) {
    return Number.isInteger(value);
};
exports.isInteger = isInteger;
