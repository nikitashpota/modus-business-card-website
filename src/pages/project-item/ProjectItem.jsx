import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";
import Axios from "axios";
//modules
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";

//css
import "./ProjectItem.css";

const ProjectItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [project, setProject] = useState(location.state.project);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const { id, projectName } = project;

  React.useEffect(() => {
    Axios.get(`/api/getProject/${project.id}`).then((response) => {
      setProject(response.data);
      setMainImage(response.data?.projectImageUrls?.split(",")[0]);
      setSelectedIcon(response.data?.projectImageUrls?.split(",")[0]);
    });
  }, []);

  const { projectImageUrls, projectDescription, projectAuthors } = project;

  if (!projectImageUrls) return;

  const imagesList = projectImageUrls.split(",").map((image, index) => {
    return (
      <img
        key={index}
        className={`project-item_images__item-image ${
          selectedIcon === image
            ? "project-item_images__item-image__border"
            : ""
        }`}
        src={image}
        alt=""
        onClick={() => {
          setSelectedIcon(image);
          setMainImage(image);
        }}
      />
    );
  });

  return (
    <div className="project-item">
      <ScrollToTop />

      <div
        className="project-item_main-image"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
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
              fill="#242424"
              clipRule="evenodd"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z" />
            </svg>
          </div>
          <h2 className="tag__font project-item_title__color">{projectName}</h2>
        </div>

        <div className="project-item_images">

          {imagesList}
        </div>
      </div>

      <div>
        <div className="project-item_information">
          <p className="project-item_information__header">Об объекте:</p>
          <pre className="project-item_description">{projectDescription}</pre>
          <p className="project-item_information__header">Адрес:</p>
          <pre className="project-item_description">Москва</pre>
          <p className="project-item_information__header">
            Начало проектирования:
          </p>
          <pre className="project-item_description">2022</pre>
          <p className="project-item_information__header">
            Ввод в эксплуатацию:
          </p>
          <pre className="project-item_description">2024</pre>
          <p className="project-item_information__header">
            Авторский коллектив:
          </p>
          <div className="project-item_authors__list">{projectAuthors}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
