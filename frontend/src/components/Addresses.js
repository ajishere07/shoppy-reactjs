import React from "react";
import { Field } from "formik";

export default function Addresses({ id, address }) {
  return (
    <div className="border-2 border-custom-700 rounded-lg px-4 py-3 my-2">
      <label>
        <Field
          type="radio"
          name="selected"
          value={address}
          id={id}
          className="mr-2"
        />
        {address}
      </label>
    </div>
  );
}
