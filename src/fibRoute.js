"use strict";
// Endpoint for querying the fibonacci numbers
Object.defineProperty(exports, "__esModule", { value: true });
//const fibonacci = require("./fib");
const express_1 = require("express");
const fib_1 = require("./fib");
exports.default = (req, res) => {
    const { num } = req.params;
    const fibN = (0, fib_1.fibonacci)(parseInt(num));
    let result = `fibonacci(${num}) is ${fibN}`;
    if (fibN < 0) {
        result = `fibonacci(${num}) is undefined`;
    }
    res.send(result);
};
//# sourceMappingURL=fibRoute.js.map