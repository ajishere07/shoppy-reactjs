import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { dataCollection, getID } from "../reduxSlices/productData";
import CurrencyFormat from "react-currency-format";

function ProductCard({ img, name, price, id, img2, img3, img4, qty }) {
  const dispatch = useDispatch();

  const fun = () => {
    dispatch(getID(id));
    dispatch(dataCollection({ img, id, name, price, img2, img3, img4, qty }));
  };
  
  return (
    <Link to="/buy">
      <div className="hover:shadow-xl cursor-pointer" onClick={fun}>
        <img src={img} alt="img" className="mx-auto h-60 object-contain"></img>
        <p className="font-medium text-center mt-4">{name}</p>
        {/* <p className="font-medium text-center ">{price}</p> */}
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
          renderText={(value) => (
            <p className="font-medium text-center ">{value}</p>
          )}
        />
      </div>
    </Link>
  );
}

export default ProductCard;
