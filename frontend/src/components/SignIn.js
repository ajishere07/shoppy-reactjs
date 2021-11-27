import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import ErrorMessageCustom from "./ErrorMessageCustom";

const validationSchema = yup.object({
  email: yup.string().required("name is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("password is required"),
});

export const SignIn = ({ set }) => {
  return (
    <div className="border-2 border-custom-700 w-96 px-4 py-4 rounded-xl mt-4">
      <h1 className="font-medium text-3xl mb-4">Sign In</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col">
          <label className="formLabel">Email Address</label>
          <Field name="email" type="text" className="inputt" />
          <ErrorMessageCustom name="email" />
          <label className="formLabel">Password</label>
          <Field name="password" type="password" className="inputt"></Field>
          <ErrorMessageCustom name="password" />
          <button
            type="submit"
            className="bg-custom-700 rounded-xl mt-4 h-10 text-custom-400 text-lg font-semibold "
          >
            Sign In
          </button>
          <p
            onClick={() => {
              set(true);
            }}
            className="cursor-pointer text-center font-semibold text-sm mt-4 hover:text-custom-700 hover:underline"
          >
            Don't have an account yet? Register
          </p>
        </Form>
      </Formik>
    </div>
  );
};
