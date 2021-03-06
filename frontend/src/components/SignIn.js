import React from "react";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import ErrorMessageCustom from "./ErrorMessageCustom";

import { ToastContainer, toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { setCredentials } from "../reduxSlices/userCredentials";

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
function toastLoginned(msg) {
  if (msg !== "login") {
    toast.error(msg, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return;
  }
  toast.success("Login Successfully", {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
// const handleError = async (response) => {
//   if (!response.ok) {
//     const { message } = await response.json();
//     console.log("message:", message);
//     throw Error(message);
//   }
//   return response.json();
// };
export const SignIn = ({ set }) => {
  const dispatch = useDispatch();

  const authHandleLogin = (email, password) => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          const { message } = await response.json();
          console.log("message:", message);
          throw Error(message);
        }
        const { name } = await response.json();
        console.log(name);
        dispatch(
          setCredentials({ name, email, password, isAuthenticated: true })
        );
      })

      .then(() => {
        toastLoginned("login");
        set("account");
        return;
      })
      .catch((error) => {
        if (error.message === "Unexpected token U in JSON at position 0") {
          console.log("User Already Exists");
          toastLoginned("User Already Exists");
          return;
        }
        console.log(error.message);
        toastLoginned(error.message);
      });
  };

  return (
    <div className="border-2 border-custom-700 w-96 px-4 py-4 rounded-xl mt-4 sm:mx-0 mx-8">
      <h1 className="font-medium text-3xl mb-4">Sign In</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          authHandleLogin(values.email, values.password);
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

          <p
            onClick={() => {
              set("register");
            }}
            className="cursor-pointer text-center font-semibold text-sm mt-4 hover:text-custom-700 hover:underline"
          >
            Don't have an account yet? Register
          </p>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};
