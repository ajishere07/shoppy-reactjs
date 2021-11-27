import React from "react";
import { ErrorMessage } from "formik";

const ErrorMessageCustom = ({ name }) => {
  return (
    <div
      style={{
        color: "red",
        fontSize: "0.7rem",
        marginTop: "-16px",
        marginBottom: "10px",
      }}
    >
      <ErrorMessage name={name}></ErrorMessage>
    </div>
  );
};

export default ErrorMessageCustom;
