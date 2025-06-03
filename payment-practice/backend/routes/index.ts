const express = require("express");
const router = express.Router();
import type { Request, Response } from "express";

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello, express");
});

module.exports = router;
