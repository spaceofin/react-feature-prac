export const createSinglePayment = async (order: any) => {
  const {
    partner_user_id,
    item_name,
    quantity,
    total_amount,
    tax_free_amount,
  } = order;
  const partner_order_id = "order1234";

  const cid = "TC0ONETIME";
  const approval_url = process.env.KAKAOPAY_APPROVAL_URL;
  const cancel_url = process.env.KAKAOPAY_CANCEL_URL;
  const fail_url = process.env.KAKAOPAY_FAIL_URL;

  const response = await fetch(
    `${process.env.KAKAOPAY_BASE_URL}/online/v1/payment/ready`,
    {
      method: "POST",
      headers: {
        Authorization: `SECRET_KEY ${process.env.KAKAOPAY_SECRET_KEY_DEV}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cid,
        partner_order_id,
        partner_user_id,
        item_name,
        quantity,
        total_amount,
        tax_free_amount,
        approval_url,
        cancel_url,
        fail_url,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    const message =
      errorData?.extras?.method_result_message ||
      errorData?.error_message ||
      "unknown error";
    throw new Error(message);
  }

  return response.json();
};
