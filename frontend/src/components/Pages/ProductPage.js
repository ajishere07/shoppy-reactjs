import React from "react";

import CategoryTab from "../CategoryTab";
import Navbar from "../Navbar";
import ProductContainer from "../ProductContainer";
import ProductsGrid from "../ProductsGrid";
function ProductPage() {
  return (
    <div>
      <Navbar />
      <CategoryTab />
      <ProductContainer />

      <h1 className="xl:mx-12 mx-6 my-4 text-3xl">Related Products</h1>
      <ProductsGrid />
    </div>
  );
}

export default ProductPage;
