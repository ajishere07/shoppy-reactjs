import React, { useState } from "react";
import { RegisterForm } from "../RegisterForm";
import { SignIn } from "../SignIn";

function AuthenticationPage() {
  const [renderRegisterPage, setRenderRegisterPage] = useState(false);

  if (renderRegisterPage)
    return (
      <div className="flex items-center justify-center">
        <RegisterForm set={setRenderRegisterPage} />
      </div>
    );
  else
    return (
      <div className="flex items-center justify-center">
        <SignIn set={setRenderRegisterPage} />
      </div>
    );
}

export default AuthenticationPage;
