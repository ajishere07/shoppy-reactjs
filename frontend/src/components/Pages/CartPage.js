import React from "react";
import CartItemsContainer from "../CartItemsContainer";
import CategoryTab from "../CategoryTab";
import SubtotalBox from "../SubtotalBox";

function CartPage() {
  return (
    <>
      <CategoryTab />
      <div
        className="flex px-6 justify-evenly bg-gray-300"
        style={{ background: "#E5E7EB", minHeight: "100vh" }}
      >
        <CartItemsContainer />
        <SubtotalBox />
      </div>
    </>
  );
}

export default CartPage;
