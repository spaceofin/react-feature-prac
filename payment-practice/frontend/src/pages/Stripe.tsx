import CheckoutForm from "../components/CheckoutForm";
import { stripePromise, fetchClientSecret } from "../services/stripeClient";
import { CheckoutProvider } from "@stripe/react-stripe-js";

export default function Stripe() {
  return (
    <CheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
      <CheckoutForm />
    </CheckoutProvider>
  );
}
