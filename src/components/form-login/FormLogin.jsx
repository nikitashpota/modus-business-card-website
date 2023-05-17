import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useAuth } from "../../hooks/use-auth";
import Form from "../form/Form";
import { useNavigate } from "react-router-dom";

import "./FormLogin.css";

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({ email: user.email, id: user.uid, token: user.accessToken })
      );
      navigate("/");
    });
  };
  return <Form title="Вход" handleClick={handleLogin} />;
};

export default FormLogin;
