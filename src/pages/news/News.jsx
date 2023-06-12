import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Axios from "axios";
import { useAuth } from "../../hooks/use-auth";
import AddCard from "../../components/add-card/AddCard";

import "./News.css";
import NewsCard from "../../components/news-card/NewsCard";

const News = () => {
  const [newsArray, setNewsArray] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  const [limit] = React.useState(5);

  const { isAuth } = useAuth();
  let ref = React.useRef(null);

  const loadNews = async () => {
    await Axios.get(
      `/api/getNewsOfThisType/${offset}/${limit}`
    )
      .then((response) => {
        const newArray = response.data;
        setNewsArray((prevArray) => [...prevArray, ...newArray]);
        setOffset((prevOffset) => prevOffset + limit);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useState(() => {
    loadNews();
  }, []);

  let allNews = newsArray.map((news) => {
    return <NewsCard key={news.id} news={news} />;
  });

  if (isAuth) {
    allNews = [
      ...allNews,
      <AddCard key={allNews.length + 1} path="/addNews" />,
    ];
  }

  return (
    <div className="news">
      <div className="tag_container">
        <h1 className="tag__font">О нас</h1>
      </div>
      <div className="project-list_items-container">
        <ScrollContainer
          hideScrollbars={false}
          innerRef={ref}
          className="project-list_items scroll-container"
        >
          {allNews}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default News;
