import { createSingleOrder } from "../services/kakaopayServices";

const isBrowser =
  !/iPhone|iPad|iPod|Android|BlackBerry|Windows Phone|webOS|Opera Mini|IEMobile|Mobile/i.test(
    navigator.userAgent
  );

export default function Kakaopay() {
  // console.log(navigator.userAgent);

  const handleSingleOrderClick = async () => {
    try {
      const response = await createSingleOrder();
      console.log(response);

      if (isBrowser) {
        const redirectUrl = response.next_redirect_pc_url;
        window.location.href = redirectUrl;
      }
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
    </div>
  );
}
