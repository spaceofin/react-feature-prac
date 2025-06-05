const express = require("express");
const router = express.Router();
const stripe = require("../lib/stripe").default;
import type { Request, Response } from "express";

router.post("/create-checkout-session", async (req: Request, res: Response) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "T-shirt",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      ui_mode: "custom",
      return_url: "https://example.com/return?session_id={CHECKOUT_SESSION_ID}",
    });

    res.json({ checkoutSessionClientSecret: session.client_secret });
  } catch (error) {
    console.log("Error creating checkout session:", error);
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
