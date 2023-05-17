import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import FormRegister from "../../components/form-register/FormRegister";

import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <FormRegister />
      <p>
        Уже есть аккаунт? <LinkRouter to="/login">Войти</LinkRouter>
      </p>
    </div>
  );
};

export default Register;
