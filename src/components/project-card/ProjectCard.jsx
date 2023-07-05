import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

import "./ProjectCard.css";
import Axios from "axios";
import ModalYesNo from "../modal-yesno/ModalYesNo";

const ProjectCard = ({ project }) => {
  const { id, projectName, projectImageUrl } = project;
  const { isAuth } = useAuth();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoading(false);
    };
    image.src = projectImageUrl;
  }, []);

  const style = {
    backgroundImage: `url(${loading ? "img/loading.gif" : projectImageUrl})`,
    backgroundSize: `${loading ? "25%" : "cover"}`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmModal = () => {
    Axios.delete(`/api/deleteProject/${id}`);
    window.location.reload();
    setIsModalOpen(false);
  };

  return (
    <Link
      className="card"
      style={style}
      to={`project/${id}`}
      state={{ project: project }}
    >
      {isAuth ? (
        <img
          className="card_delete"
          onClick={openModal}
          src="img\delete.svg"
          alt="delete"
        />
      ) : null}

      <ModalYesNo
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmModal}
      />

      <div className="card_title__box" onClick={() => {}}>
        <div style={{ textDecoration: "none", textAlign: "center" }}>
          <span className="card_title__text">{projectName}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
