import React from "react";
import { useFormik } from "formik";
export const RegisterForm = ({ set }) => {
  const formikk = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
  });
  return (
    <div className="border-2 border-custom-700 w-96 px-4 py-4 rounded-xl mt-4">
      <h1 className="font-medium text-3xl mb-4">Create An Account</h1>
      <form className="flex flex-col">
        <label htmlFor="Name" className="formLabel">
          Name
        </label>
        <input name="Name" className="inputt" type="text" />
        <label htmlFor="email" className="formLabel">
          Email Address
        </label>
        <input name="email" className="inputt" type="text" />
        <label htmlFor="password" className="formLabel">
          Password
        </label>
        <input name="password" className="inputt" type="password" />
        <label htmlFor="repassword" className="formLabel">
          Re-Password
        </label>
        <input name="repassword" className="inputt" type="password" />
        <button
          type="Submit"
          className="bg-custom-700 rounded-xl mt-4 h-10 text-custom-400 text-lg font-semibold "
        >
          Register
        </button>
        <p
          onClick={() => {
            set(false);
          }}
          className="cursor-pointer text-center font-semibold text-sm mt-4 hover:text-custom-700 hover:underline"
        >
          Already have an account! Sign In
        </p>
      </form>
    </div>
  );
};
