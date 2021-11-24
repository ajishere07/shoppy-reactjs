import React, { useEffect, useState } from "react";

import ProductsGrid from "../ProductsGrid";
import { useSelector } from "react-redux";

function ProductsListingPage() {
  const [header, setHeader] = useState("");
  const { isElectronicsPage, isMobilesPage, isBooksPage } = useSelector(
    (state) => state.check
  );
  useEffect(() => {
    if (isElectronicsPage) {
      setHeader("Electronics Items");
    }
    if (isMobilesPage) {
      setHeader("Mobiles");
    }
    if (isBooksPage) {
      setHeader("Books");
    }
  }, []);

  return (
    <div>
      <h1 className="header">{header}</h1>
      <ProductsGrid />
    </div>
  );
}

export default ProductsListingPage;
