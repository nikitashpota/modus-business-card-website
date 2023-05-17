import React from "react";

import "./Form.css";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  return (
    <div className="form">
      <input
        className="form__input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        className="form__input"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button className="form__button" onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};

export default Form;
