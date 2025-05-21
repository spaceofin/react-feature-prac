export async function createOrder() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_PAYPAL_SERVER_BASE_URL}/api/orders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
          cart: [
            {
              id: "YOUR_PRODUCT_ID",
              quantity: "YOUR_PRODUCT_QUANTITY",
            },
          ],
        }),
      }
    );

    const orderData = await response.json();

    if (orderData.id) {
      return orderData;
    }
    const errorDetail = orderData?.details?.[0];
    const errorMessage = errorDetail
      ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
      : JSON.stringify(orderData);

    throw new Error(errorMessage);
  } catch (error) {
    console.error(error);
    return `Could not initiate PayPal Checkout...<br><br>${error}`;
  }
}
