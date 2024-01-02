"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sum_1 = require("./ex1/sum");
var person_1 = require("./ex2/person");
var generic_1 = require("./ex3/generic");
var enum_1 = require("./ex4/enum");
var rect_1 = require("./ex5/rect");
var decorator_1 = require("./ex6/decorator");
var callapi_1 = require("./ex7/callapi");
var declareFunc_1 = require("./ex8/declareFunc");
//ex1 
console.log({ ex1: (0, sum_1.sumArr)([1, 2, 3, 4]) });
//ex2
var ex2 = {
    name: "Dev Test",
    age: 22,
    email: "devtest@gmail.com",
};
console.log({ ex2: (0, person_1.person)(ex2) });
// ex3
console.log({ ex3: (0, generic_1.getFirstElement)([{ id: 1, name: 'test1' }, { id: 2, name: 'test2' }]) });
//ex4
console.log({ ex4: (0, enum_1.showColor)(enum_1.Color.RED) });
//ex5
var ex5 = new rect_1.Rectangle(4, 5);
console.log({ ex5: ex5.calculateArea() });
//ex6
var ex6 = new decorator_1.Test();
console.log({ ex6: ex6.test() });
//ex7
var url = "http://localhost:3000";
(0, callapi_1.dataProduct)(url)
    .then(function (data) {
    console.log({ product: data });
})
    .catch(function (error) {
    console.error("err", error);
});
//ex8
// tinhs giai thua
console.log({ 'calculateFactorial(3) = ': (0, declareFunc_1.calculateFactorial)(3) });
// check so nguyen
console.log({ '3 isInteger?': (0, declareFunc_1.isInteger)(3) ? 'yes' : 'no' });
//ex9 
