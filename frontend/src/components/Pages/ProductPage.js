import React from "react";

import CategoryTab from "../CategoryTab";
import Navbar from "../Navbar";
import ProductContainer from "../ProductContainer";

function ProductPage() {
  return (
    <div>
      <Navbar />
      <CategoryTab />
      <ProductContainer />
    </div>
  );
}

export default ProductPage;
