import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import ErrorMessageCustom from "./ErrorMessageCustom";
import { authe, googleAuthProvider } from "../configuration/firebase.js";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const validationSchema = yup.object({
  email: yup.string().required("name is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Minimum eight characters, at least one letter and one number"
    )
    .required("password is required"),
});

export const SignIn = ({ set }) => {
  const authHandleLogin = (a, email, password) => {
    signInWithEmailAndPassword(a, email, password)
      .then((auth) => {
        alert("succefully login");
      })
      .catch((e) => alert(e.message));
  };
  const authHandleGoogleSignIn = () => {
    signInWithPopup(authe, googleAuthProvider)
      .then((result) => {
        alert("signed in with your google account");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="border-2 border-custom-700 w-96 px-4 py-4 rounded-xl mt-4 sm:mx-0 mx-8">
      <h1 className="font-medium text-3xl mb-4">Sign In</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          authHandleLogin(authe, values.email, values.password);
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
          <hr className="mt-6 w-4/5 mx-auto" />
          <p
            className="inline text-center -mt-3 mx-auto"
            style={{ backgroundColor: "white", width: "30px" }}
          >
            or
          </p>

          <div
            className="flex items-center justify-center sm:w-3/5 w-4/6 mx-auto sm:mx-auto cursor-pointer py-2 rounded-xl mt-2"
            style={{ border: "0.5px solid black" }}
            onClick={authHandleGoogleSignIn}
          >
            <img
              className="sm:w-6 sm:h-6 w-6 h-6 inline sm:mr-2 mr-1"
              src="https://img.icons8.com/color/2x/google-logo.png"
              alt="icon"
            />
            <p className="inline font-normal text-sm sm:text-sm">
              Continue With Google
            </p>
          </div>
          {/* <button
            onClick={authHandleGoogleSignIn(authe, googleAuthProvider)}
            className="bg-custom-700 rounded-xl mt-4 h-10 text-custom-400 text-lg font-semibold "
          >
            Sign In
          </button> */}
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
