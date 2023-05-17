import React from "react";
import { useNavigate } from "react-router-dom";

import "./AddCard.css";

const AddCard = ({path}) => {

  const navigate = useNavigate()
  return (
    <div className="add-card">
      <img
        onClick={() => {navigate(path);}}
        className="add-card_img"
        src="/img/plus.svg"
        alt="+"
      />
    </div>
  );
};

export default AddCard;
