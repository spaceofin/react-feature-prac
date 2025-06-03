import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY || ""
);

export const fetchClientSecret = () => {
  return fetch(
    `${import.meta.env.VITE_STRIPE_SERVER_BASE_URL}/create-checkout-session`,
    {
      method: "POST",
    }
  )
    .then((response) => response.json())
    .then((json) => json.checkoutSessionClientSecret);
};
