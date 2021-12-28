import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const { isElectronicsPage, isMobilesPage, isBooksPage } = useSelector(
    (state) => state.check
  );

  useEffect(() => {
    async function fetchData() {
      if (isElectronicsPage) {
        setLoader(true);
        const res = await axios.get("/api/electronics");
        setProducts(res.data);
        setLoader(false);
      } else if (isBooksPage) {
        setLoader(true);
        const res = await axios.get("/api/books");
        setProducts(res.data);
        setLoader(false);
      } else if (isMobilesPage) {
        setLoader(true);
        const res = await axios.get("/api/mobiles");
        setProducts(res.data);
        setLoader(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {loader ? (
        <div className="fixed top-2/4 left-2/4">
          <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default ProductsGrid;
