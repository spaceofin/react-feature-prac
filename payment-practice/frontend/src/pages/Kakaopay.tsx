import { createSingleOrder } from "../services/kakaopayServices";

export default function Kakaopay() {
  return (
    <div className="p-10">
      <button
        onClick={createSingleOrder}
        className="bg-[rgb(255,235,0)] px-8 py-2 rounded-full hover:cursor-pointer text-lg">
        <span>kakao</span>
        <span className="font-bold">pay</span>
      </button>
    </div>
  );
}
