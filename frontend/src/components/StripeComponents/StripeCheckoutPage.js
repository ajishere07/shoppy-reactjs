import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";

export default function StripeCheckoutPage() {
  const { price } = useSelector((state) => state.data);
  const { totalAmount } = useSelector((state) => state.items);
  const { checkoutForPayment } = useSelector((state) => state.check);

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 className="text-xl sm:text-2xl lg:text-5xl mb-4">
        Continue with payment option
      </h1>
      <StripeCheckout
        name="Shoppy"
        shippingAddress
        locale="eng"
        description="online ecommerce company"
        token={onToken}
        stripeKey="pk_test_51K7wgiSE8BI0lHVRaev6Vxd1zOgACdrH0M6zlL7hx7SfXIYA3qliuYYPA9bvaOHTbJ0FlEARfqrb8OvfFRhdMzqc007O7Fwe4p"
        amount={checkoutForPayment ? totalAmount : price}
        currency="INR"
      />
    </div>
  );
}
