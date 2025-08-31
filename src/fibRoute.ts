// Endpoint for querying the fibonacci numbers

//const fibonacci = require("./fib");
import { Request, Response } from "express"
import { fibonacci } from "./fib";

export default (req: Request, res: Response) => {
  const { num } = req.params as { num: string };

  const n = parseInt(num, 10)
  const fibN = fibonacci(n)

  let result = `fibonacci(${num}) is ${fibN}`

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`
  }

  res.send(result)
}
