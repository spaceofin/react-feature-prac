const express = require("express");
const router = express.Router();
import type { Request, Response } from "express";
import { createSinglePayment } from "../services/kakaopay";

router.post("/api/orders/single", async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const response = await createSinglePayment(order);
    res.status(200).send(response);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

module.exports = router;
