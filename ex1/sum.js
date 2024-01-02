"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArr = void 0;
var sumArr = function (numbers) {
    return numbers.reduce(function (total, currVal) { return total = total + currVal; }, 0);
};
exports.sumArr = sumArr;
