import React from "react";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import ErrorMessageCustom from "./ErrorMessageCustom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCredentials } from "../reduxSlices/userCredentials";
import { useDispatch } from "react-redux";

const handleError = async (response) => {
  if (!response.ok) {
    const { message } = await response.json();
    console.log("message:", message);
    throw Error(message);
  }
  return response.json();
};

function toastMessage(msg) {
  if (msg === "success") {
    toast.success("Registered", {
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
  toast.error(msg, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
const validationSchema = yup.object({
  name: yup.string().required("name is required"),
  email: yup.string().required("email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Minimum eight characters, at least one letter and one number"
    )
    .required("password is requires"),
  repassword: yup.string().required("Re-password is required"),
});
export const RegisterForm = ({ set }) => {
  const dispatch = useDispatch();

  const authHandleRegister = (name, email, password) => {
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then(handleError)
      .then(async () => {
        await dispatch(setCredentials({ name, email, password }));
        await toastMessage("success");
        set("account");
      })
      .catch((error) => {
        // if (error.message === "Unexpected token U in JSON at position 0") {
        //   console.log("User Already Exists");
        //   toastMessage("User Already Exists");
        //   return;
        // }
        console.log(error.message);
        toastMessage(error.message);
      });
  };

  return (
    <div className="border-2 border-custom-700 w-96 px-4 py-4 rounded-xl mt-4 sm:mx-0 mx-8">
      <h1 className="font-medium text-3xl mb-4">Create An Account</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: "", email: "", password: "", repassword: "" }}
        onSubmit={(values) => {
          // console.log(values);
          if (values.password === values.repassword) {
            authHandleRegister(values.name, values.email, values.password);
          } else {
            alert("Re-enter the exact password ");
          }
        }}
      >
        <Form className="flex flex-col">
          <label className="formLabel">Name</label>
          <Field name="name" type="text" className="inputt" />
          <ErrorMessageCustom name="name" />
          <label className="formLabel">Email Address</label>
          <Field name="email" type="text" className="inputt" />
          <ErrorMessageCustom name="email" />
          <label className="formLabel">Password</label>
          <Field name="password" type="password" className="inputt" />
          <ErrorMessageCustom name="password" />
          <label className="formLabel">Re-Password</label>
          <Field name="repassword" type="password" className="inputt" />
          <ErrorMessageCustom name="repassword" />
          <button
            type="submit"
            className="bg-custom-700 rounded-xl mt-4 h-10 text-custom-400 text-lg font-semibold "
          >
            Register
          </button>
          <p
            onClick={() => {
              set("login");
            }}
            className="cursor-pointer text-center font-semibold text-sm mt-4 hover:text-custom-700 hover:underline"
          >
            Already have an account! Sign In
          </p>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};
