import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import stripe from "./stripe";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello, express");
});

app.post("/create-checkout-session", async (req: Request, res: Response) => {
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
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
