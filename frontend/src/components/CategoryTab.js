import React from "react";
import TabList from "./TabList";
import { useDispatch } from "react-redux";
import {
  renderElectronicsProducts,
  renderBooksProducts,
  renderMobilesProducts,
} from "../reduxSlices/checkSlice";

function CategoryTab() {
  const dispatch = useDispatch();
  const renderElectronicsPage = () => {
    dispatch(renderElectronicsProducts(true));
  };
  const renderMobilesPage = () => {
    dispatch(renderMobilesProducts(true));
  };
  const renderBooksPage = () => {
    dispatch(renderBooksProducts(true));
  };
  return (
    <ul className="flex justify-between items-align px-4 my-4 sm:px-12">
      <TabList name="Electronics" fun={renderElectronicsPage} />
      <TabList name="Mobiles" fun={renderMobilesPage} />
      <TabList name="Books" fun={renderBooksPage} />
    </ul>
  );
}

export default CategoryTab;
