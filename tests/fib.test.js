"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const fibRoute_1 = __importDefault(require("../src/fibRoute"));
const app = (0, express_1.default)();
app.get("/fib/:num", fibRoute_1.default);
describe("rest", () => {
    it("fib zero test", async () => {
        const response = await (0, supertest_1.default)(app).get("/fib/0");
        expect(response.text).not.toBeNull();
        expect(response.text).toEqual("fibonacci(0) is 0");
    });
    it("fib 1 test", async () => {
        const response = await (0, supertest_1.default)(app).get("/fib/1");
        expect(response.text).not.toBeNull();
        expect(response.text).toEqual("fibonacci(1) is 1");
    });
    it("fib negative test", async () => {
        const response = await (0, supertest_1.default)(app).get("/fib/-2");
        expect(response.text).not.toBeNull();
        expect(response.text).toEqual("fibonacci(-2) is undefined");
    });
    it("fib 21 test", async () => {
        const response = await (0, supertest_1.default)(app).get("/fib/21");
        expect(response.text).not.toBeNull();
        expect(response.text).toEqual("fibonacci(21) is 10946");
    });
});
//# sourceMappingURL=fib.test.js.map