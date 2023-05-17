import React from "react";
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
  const [project, setProject] = React.useState(location.state.project);
  const { id, projectName } = project;

  React.useEffect(() => {
    Axios.get(
      `${import.meta.env.VITE_APP_API_URL}/api/getProject/${project.id}`
    ).then((response) => {
      setProject(response.data);
    });
  }, []);

  const { projectImageUrls, projectDescription, projectAuthors } = project;

  if (!projectImageUrls) return;

  const imagesList = projectImageUrls.split(",").map((image, index) => {
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
        <h2 className="tag__font">{projectName}</h2>
      </div>

      <pre className="project-item_description">{projectDescription}</pre>
      <div className="project-item_images">
        <ScrollContainer
          hideScrollbars={false}
          className="project-item_images__list scroll-container"
        >
          {imagesList}
        </ScrollContainer>
      </div>
      <div className="project-item_authors">
        <p className="project-item_authors__header">Авторский коллектив:</p>
        <div className="project-item_authors__list">{projectAuthors}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
