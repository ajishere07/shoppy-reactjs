import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RegisterForm } from "../RegisterForm";
import Navbar from "../Navbar";
import { Formik, Form } from "formik";
import { SignIn } from "../SignIn";
import { selectAddress } from "../../reduxSlices/userCredentials";
import Addresses from "../Addresses";

function AuthenticationPage() {
  const [renderRegisterPage, setRenderRegisterPage] = useState("register");
  const [address, setAddress] = useState([]);
  const dispatch = useDispatch();

  const { name, email, password } = useSelector((state) => state.credential);

  //adding the address to the address array

  async function addAddressFun(add) {
    if(add === null){
      return;
    }
    await setAddress([...address, { id: address.length, address: add }]);
    fetch("http://localhost:5000/useraddresses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${email}:${password}`,
      },
      body: JSON.stringify(address),
    });
    console.log("addded");
  }
  // useEffect(() => {

  // }, [address]);

  useEffect(() => {
    if (email === "") {
      return;
    }
    console.log("it runs");
    fetch("http://localhost:5000/useraddress", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${email}:${password}`,
      },
    }).then((response)=> response.json()).then(
      (addressArray)=>setAddress(addressArray))

    
  }, [email]);
  //adding the address to the address array

  //address data send to the backend
  // const persist = () => {
  //address data send to the backend

  //authentication page render checks

  if (renderRegisterPage === "register")
    return (
      <div className="flex items-center justify-center">
        <RegisterForm set={setRenderRegisterPage} />
      </div>
    );
  else if (renderRegisterPage === "login")
    return (
      <div className="flex items-center justify-center">
        <SignIn set={setRenderRegisterPage} />
      </div>
    );
  else {
    return (
      // <div className="flex items-center justify-center">
      //   <SignIn set={setRenderRegisterPage} />
      // </div>
      <div>
        <Navbar />
        <div className="max-w-lg border-2 border-black mx-auto py-6 px-4 mt-6 shadow-xl">
          <h1 className="text-3xl">{name && name}</h1>

          <Formik
            initialValues={{ selected: "" }}
            onSubmit={async (values) => {
              alert(JSON.stringify(values, null, 2));
              await dispatch(selectAddress({ address: values.selected }));
              await console.log(values);
            }}
          >
            <Form>
              {address.length !== 0 ? (
                address.map((a) => (
                  <Addresses key={a.id} id={a.id} address={a.address} />
                ))
              ) : (
                <h4 className="my-2">
                  <i>Add your address by clicking that button</i>
                </h4>
              )}

              <button
                type="button"
                className="py-2 px-4 border-2 border-red-500 flex items-center rounded-lg"
                onClick={async () => {
                  const add = await window.prompt("enter your address");
                  if (add === "") {
                    alert("it cannot be blank");
                    return;
                  }
                  await addAddressFun(add);
                }}
              >
                <span className="mr-2">Add Address</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
              <button type="submit" className="btn mx-auto mt-4">
                Save
              </button>
            </Form>
          </Formik>
          <button
            className="logoutBtn mx-auto my-2"
            onClick={() => setRenderRegisterPage("login")}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

//authentication page render checks

export default AuthenticationPage;
