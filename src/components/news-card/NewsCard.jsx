import React from "react";
import { useAuth } from "../../hooks/use-auth";
import ModalYesNo from "../modal-yesno/ModalYesNo";
import { Link } from "react-router-dom";
import Axios from "axios";

const NewsCard = ({ news }) => {
  const { id, newsName, newsImageUrl } = news;
  const { isAuth } = useAuth();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoading(false);
    };
    image.src = newsImageUrl;
  }, []);

  const style = {
    backgroundImage: `url(${loading ? "img/loading.gif" : newsImageUrl})`,
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
    Axios.delete(`/api/deleteNews/${id}`);
    window.location.reload();
    setIsModalOpen(false);
  };

  return (
    <div className="card" style={style}>
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
        <Link
          to={`news/${id}`}
          state={{ news: news }}
          style={{ textDecoration: "none" }}
        >
          <span className="card_title__text">{newsName}</span>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
