import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeCheckoutPage() {
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
        token={onToken}
        stripeKey="pk_test_51K7wgiSE8BI0lHVRaev6Vxd1zOgACdrH0M6zlL7hx7SfXIYA3qliuYYPA9bvaOHTbJ0FlEARfqrb8OvfFRhdMzqc007O7Fwe4p"
      />
    </div>
  );
}
