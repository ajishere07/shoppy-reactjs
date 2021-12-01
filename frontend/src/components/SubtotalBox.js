import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubtotalBox() {
  const { items, totalItems, totalAmount } = useSelector(
    (state) => state.items
  );

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

  return (
    <aside
      className="lg:sticky lg:top-3 lg:w-1/5 w-full bg-red-400 my-2 px-2 h-full py-2"
      style={{ background: "white" }}
    >
      <div>
        <span>Subtotal ({totalItems} items ): </span>
        {/* <span>{totalAmount}</span> */}
        <CurrencyFormat
          value={totalAmount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
          renderText={(value) => <span>{value}</span>}
        />
      </div>
      <div className=" mb-4">
        <span>Delivery: </span>
        <span>
          <i className="uppercase ">free</i>
        </span>
      </div>

      <button className="checkoutBtn" onClick={toastMessage}>
        Checkout
      </button>
      <ToastContainer />
    </aside>
  );
}

export default SubtotalBox;
