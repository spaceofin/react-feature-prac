export async function createSingleOrder() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_KAKAOPAY_SERVER_BASE_URL}/api/orders/single`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          partner_user_id: "user1234",
          item_name: "초코파이",
          quantity: 1,
          total_amount: 1000,
          tax_free_amount: 0,
        }),
      }
    );

    const orderData = await response.json();
    console.log("KakaoPay order data:", orderData);
    return orderData;
  } catch (error) {
    console.error("Error creating KakaoPay single payment:", error);
  }
}
