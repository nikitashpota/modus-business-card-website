import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";
import Axios from "axios";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";

const NewsItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [news, setNews] = React.useState(location.state.news);
  const { id, newsName } = news;

  React.useEffect(() => {
    Axios.get(`/api/getNews/${id}`)
      .then((response) => {
        console.log(response.data);
        setNews(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const { newsImageUrl, newsDescription } = news;

  if (!newsImageUrl) return;

  const imagesList = newsImageUrl.split(",").map((image, index) => {
    return (
      <div className="project-item_images__item" key={index}>
        <img className="project-item_images__item-image" src={image} alt="" />
      </div>
    );
  });

  return (
    <div className="project-item">
      <ScrollToTop />
      <div className="project-item_title__container">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <svg
            className="project-item_title__back"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            fill="white"
            clipRule="evenodd"
          >
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z" />
          </svg>
        </div>
        <h2 className="tag__font">{newsName}</h2>
      </div>
      <pre className="project-item_description">{newsDescription}</pre>
      <div className="project-item_images">
        <ScrollContainer
          hideScrollbars={false}
          className="project-item_images__list scroll-container"
        >
          {imagesList}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default NewsItem;
