import { useState } from "react";
import { createSingleOrder } from "../services/kakaopayServices";

export default function Kakaopay() {
  const [response, setResponse] = useState<Record<string, any> | null>(null);

  const handleSingleOrderClick = async () => {
    try {
      const response = await createSingleOrder();
      setResponse(response);
    } catch (error) {
      console.error("Error creating KakaoPay single order:", error);
    }
  };

  return (
    <div className="p-10">
      <button
        onClick={handleSingleOrderClick}
        className="bg-[rgb(255,235,0)] px-8 py-2 rounded-full hover:cursor-pointer text-lg">
        <span>kakao</span>
        <span className="font-bold">pay</span>
      </button>
      <div>{response && JSON.stringify(response)}</div>
    </div>
  );
}
