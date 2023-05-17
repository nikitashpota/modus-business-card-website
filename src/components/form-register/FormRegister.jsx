import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import Form from "../form/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.accessToken })
        );
        navigate("/");
      })
      .catch((err) => console.log("err", err));
  };
  return (
    <div>
      <Form title="register" handleClick={handleRegister} />
    </div>
  );
};

export default FormRegister;
