import React from "react";
import { useSelector } from "react-redux";
import CartItemContainer from "./CartItemContainer";

function CartItemsContainer() {
  const { items } = useSelector((state) => state.items);
  console.log(items);
  return (
    <section
      className="lg:w-3/4 w-full bg-red-400 my-2 px-2 "
      style={{ background: "white", height: "100%" }}
    >
      <span className="font-medium text-3xl">Your Cart</span>
      {items.length === 0 ? (
        <>
          <img
            className="my-8 w-60 mx-auto"
            src="https://www.svgrepo.com/show/17356/empty-cart.svg"
            alt="img"
          />
          <h1 className="text-center">Nothing in the Cart</h1>
        </>
      ) : (
        items.map((item) => (
          <CartItemContainer
            key={item.id}
            img={item.img}
            id={item.id}
            name={item.name}
            price={item.price}
            qty={item.qty}
          />
        ))
      )}
    </section>
  );
}

export default CartItemsContainer;
