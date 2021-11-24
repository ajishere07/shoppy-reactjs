import React from "react";
import QuantityBox from "./QuantityBox";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../reduxSlices/cartItems";
import CurrencyFormat from "react-currency-format";

function CartItemContainer({ img, name, id, price, qty }) {
  const dispatch = useDispatch();
  // const { items } = useSelector((state) => state.items);

  const increaseQty = () => {
    dispatch(increaseQuantity(id));
  };
  const decreaseQty = () => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <main
      className="py-4 box-border flex  mt-4"
      style={{ borderTop: "1px solid gray" }}
    >
      <img className="h-24 object-contain w-28" src={img} alt="img" />
      <section className="flex flex-col justify-between mb-16 ml-4">
        <h3>{name}</h3>

        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
          renderText={(value) => <h4>{value}</h4>}
        />
        <div className="flex justify-between items-center">
          <QuantityBox
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            qty={qty}
            id={id}
          />
        </div>
      </section>
    </main>
  );
}

export default CartItemContainer;
