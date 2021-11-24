import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, increaseCartItems } from "../reduxSlices/cartItems";

function ProductContainer() {
  const dispatch = useDispatch();

  const { img, name, price, id, qty } = useSelector((state) => state.data);

  return (
    <main className="flex mx-12 pt-12">
      <img className=" h-60 object-contain px-28" src={img} alt="img" />

      <section className="flex flex-col justify-between mb-16 ml-4">
        <h3>{name}</h3>
        {/* <h4>{price}</h4> */}
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
          renderText={(value) => <h4>{value}</h4>}
        />
        <button className="btn">buy</button>
        <button
          className="secondaryBtn"
          onClick={() => {
            dispatch(addToCart({ img, name, price, id, qty }));
            dispatch(increaseCartItems());
          }}
        >
          add cart
        </button>
      </section>
    </main>
  );
}

export default ProductContainer;
