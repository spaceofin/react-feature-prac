import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const REDIRECT_COUNT = 5;

export default function KakaopaySuccess() {
  const navigate = useNavigate();
  const [count, setCount] = useState(REDIRECT_COUNT);

  useEffect(() => {
    if (count === 0) {
      navigate("/kakaopay");
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="p-20">
      <p className="text-2xl font-bold">✅ Payment Success</p>
      <p className="text-xl">{`This page will redirect in ${count} seconds.`}</p>
    </div>
  );
}
