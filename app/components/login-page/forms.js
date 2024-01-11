"use client";

import React, { useState } from "react";
import LoginForm from "./forms/login-form";
import RegisterForm from "./forms/register-form";

const Forms = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return isLoginForm ? (
    <LoginForm setIsLoginForm={setIsLoginForm} />
  ) : (
    <RegisterForm setIsLoginForm={setIsLoginForm} />
  );
};

export default Forms;
