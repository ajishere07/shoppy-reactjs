import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { checkoutItems } from "../reduxSlices/checkSlice";

function SubtotalBox() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.credential);
  const { totalItems, totalAmount } = useSelector((state) => state.items);

  const toastMessage = (msg) => {
    console.log("runs");
    toast.warn(msg, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleCheckout = () => {
    toastMessage("Sign in first");
    dispatch(checkoutItems());
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

      {isAuthenticated ? (
        <Link to="payment">
          <button className="checkoutBtn" onClick={handleCheckout}>
            Checkout
          </button>
        </Link>
      ) : (
        <button className="checkoutBtn" onClick={handleCheckout}>
          Checkout
        </button>
      )}
      <ToastContainer />
    </aside>
  );
}

export default SubtotalBox;
