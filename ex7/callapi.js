"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataProduct = void 0;
var node_fetch_1 = require("node-fetch");
function dataProduct(url) {
    return new Promise(function (resolve, reject) {
        (0, node_fetch_1.default)(url)
            .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! Status: ".concat(response.status));
            }
            console.log(response);
            return response.json();
        })
            .then(function (data) {
            resolve(data);
        })
            .catch(function (error) {
            reject(error);
        });
    });
}
exports.dataProduct = dataProduct;
