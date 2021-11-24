import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useSelector } from "react-redux";

function ProductsGrid() {
  const [products, setProducts] = useState([]);

  const { isElectronicsPage, isMobilesPage, isBooksPage } = useSelector(
    (state) => state.check
  );

  useEffect(async () => {
    if (isElectronicsPage) {
      const res = await axios.get("/api/electronics");
      setProducts(res.data);
    } else if (isBooksPage) {
      const res = await axios.get("/api/books");
      setProducts(res.data);
    } else if (isMobilesPage) {
      const res = await axios.get("/api/mobiles");
      setProducts(res.data);
    }
  }, []);

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 md:w-auto xl:grid-cols-4 gap-16 mx-12 ">
      {products?.map((a) => (
        <ProductCard
          key={a._id}
          id={a._id}
          qty={a.Qty}
          img={a.img}
          img2={a.img2}
          img3={a.img3}
          img4={a.img4}
          price={a.price}
          name={a.name}
        />
      ))}
    </section>
  );
}

export default ProductsGrid;
