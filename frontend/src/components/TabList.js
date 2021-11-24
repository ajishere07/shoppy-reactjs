import React from "react";
import { Link } from "react-router-dom";

function TabList(props) {
  return (
    <Link to="/products">
      <li className="center font-serif font-medium" onClick={props.fun}>
        {props.name}
      </li>
    </Link>
  );
}

export default TabList;
