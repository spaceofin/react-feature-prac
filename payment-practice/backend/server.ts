import { Request, Response } from "express";

const express = require("express");

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello, express");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
