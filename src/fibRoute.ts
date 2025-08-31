// Endpoint for querying the fibonacci numbers

import express, { Request, Response } from "express";
import { fibonacci } from "./fib";

const router = express.Router();

router.get("/fib/:n", (req: Request, res: Response) => {
  const n: number = parseInt(req.params.n, 10);

  if (isNaN(n)) {
    res.status(400).send("Invalid number");
    return;
  }

  const result = fibonacci(n);
  res.send(`fibonacci(${n}) is ${result}`);
});

export default router;