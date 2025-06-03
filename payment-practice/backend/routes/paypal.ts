const express = require("express");
const router = express.Router();
const { createOrder, captureOrder } = require("../services/paypal");
import type { Request, Response } from "express";

router.post("/api/orders", async (req: Request, res: Response) => {
  try {
    const { cart } = req.body;
    const result = await createOrder(cart);

    if (!result) {
      throw new Error("createOrder returned undefined");
    }
    const { jsonResponse, httpStatusCode } = result;

    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

router.post(
  "/api/orders/:orderID/capture",
  async (req: Request, res: Response) => {
    try {
      const { orderID } = req.params;
      const result = await captureOrder(orderID);

      if (!result) {
        throw new Error("captureOrder returned undefined");
      }
      const { jsonResponse, httpStatusCode } = result;
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to create order:", error);
      res.status(500).json({ error: "Failed to capture order." });
    }
  }
);

module.exports = router;
