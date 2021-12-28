import React, { useEffect, useState } from "react";

import ProductsGrid from "../ProductsGrid";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";

function ProductsListingPage() {
  const [header, setHeader] = useState("");
  const { isElectronicsPage, isMobilesPage, isBooksPage } = useSelector(
    (state) => state.check
  );
  useEffect(() => {
    //if user clicks on the Electronic tab useEffect will render the electronics data
    if (isElectronicsPage) {
      setHeader("Electronics Items");
    }
    //if user clicks on the Mobiles tab useEffect will render the mobiles data
    if (isMobilesPage) {
      setHeader("Mobiles");
    }
    //if user clicks on the Books tab useEffect will render the books data
    if (isBooksPage) {
      setHeader("Books");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="header">{header}</h1>
      <ProductsGrid />
    </div>
  );
}

export default ProductsListingPage;
