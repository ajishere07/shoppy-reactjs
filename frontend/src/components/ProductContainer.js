import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, increaseCartItems } from "../reduxSlices/cartItems";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function ProductContainer() {
  const dispatch = useDispatch();
  const toastMessage = () => {
    console.log("runs");
    toast.warn("Sign In First", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const { img, name, price, id, qty } = useSelector((state) => state.data);

  return (
    <main className="xl:flex xl:mx-12 lg:pt-12 sm:flex sm:flex-col xl:flex-row lg:flex-row">
      <img
        className="h-60 object-contain lg:px-28 mx-auto lg:m-0"
        src={img}
        alt="img"
      />
      <section className="flex flex-col justify-between lg:mb-16 lg:ml-4 mx-6">
        <h3 className="mt-4 lg:m-0">{name}</h3>
        {/* <h4>{price}</h4> */}
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
          renderText={(value) => <h4 className="mb-2">{value}</h4>}
        />
        <button
          className="btn w-full lg:w-28 mb-4 lg:m-0"
          onClick={toastMessage}
        >
          buy
        </button>
        <button
          className="secondaryBtn w-full lg:w-28"
          onClick={() => {
            dispatch(addToCart({ img, name, price, id, qty }));
            dispatch(increaseCartItems());
          }}
        >
          add cart
        </button>
        <ToastContainer />
      </section>
    </main>
  );
}

export default ProductContainer;
