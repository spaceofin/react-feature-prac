import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export const fetchClientSecret = () => {
  return fetch("/create-checkout-session", { method: "POST" })
    .then((response) => response.json())
    .then((json) => json.checkoutSessionClientSecret);
};
