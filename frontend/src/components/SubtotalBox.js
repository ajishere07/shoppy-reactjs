import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";

function SubtotalBox() {
  const { items, totalItems, totalAmount } = useSelector(
    (state) => state.items
  );

  // const [subtotalitems, setSubtotalItems] = useState(0);

  return (
    <aside
      className="lg:w-1/5 w-full bg-red-400 my-2 px-2 h-full py-2"
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

      <button className="checkoutBtn">Checkout</button>
    </aside>
  );
}

export default SubtotalBox;
