import React from "react";

export const SignIn = ({ set }) => {
  return (
    <div className="border-2 border-custom-700 w-96 px-4 py-4 rounded-xl">
      <h1 className="font-medium text-3xl mb-4">Sign In</h1>
      <form className="flex flex-col">
        <label htmlFor="email" className="formLabel">
          Email Address
        </label>
        <input name="email" className="inputt" type="text" />
        <label htmlFor="password" className="formLabel">
          Password
        </label>
        <input name="password" className="inputt" type="password" />
        <button
          type="Submit"
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
          If You Don't Have An Account! Register
        </p>
      </form>
    </div>
  );
};
