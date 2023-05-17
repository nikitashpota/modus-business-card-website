import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import FormLogin from "../../components/form-login/FormLogin";

import "./Login.css";

const Login = () => {
  return (
    <div className="login_background">
      <div className="login">
        <FormLogin />
        {/* <p>
          или <LinkRouter to="/register">Регистрация</LinkRouter>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
