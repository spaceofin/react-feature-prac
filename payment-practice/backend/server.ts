import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const indexRouter = require("./routes/index");
const stripeRouter = require("./routes/stripe");
const paypalRouter = require("./routes/paypal");
const kakaopayRouter = require("./routes/kakaopay");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/stripe", stripeRouter);
app.use("/paypal", paypalRouter);
app.use("/kakaopay", kakaopayRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Node server listening at http://localhost:${PORT}/`);
});
