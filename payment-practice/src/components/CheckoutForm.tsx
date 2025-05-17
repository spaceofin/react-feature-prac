import { useCheckout, PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const checkout = useCheckout();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await checkout.confirm();

    if (result.type === "error") {
      console.log(result.error.message);
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;
