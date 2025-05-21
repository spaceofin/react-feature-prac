import { createOrder } from "../services/paypalServices";

export default function Paypal() {
  const handleCreateOrder = async () => {
    try {
      const result = await createOrder();
      console.log("Order created:", result);
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };
  return (
    <div className="p-10">
      <button
        className="border hover:cursor-pointer px-4 py-2 rounded-md text-xl bg-blue-300/50 "
        onClick={handleCreateOrder}>
        Create Order
      </button>
    </div>
  );
}
