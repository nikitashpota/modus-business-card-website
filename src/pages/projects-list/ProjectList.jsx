//npm
import React from "react";
import ProjectCard from "../../components/project-card/ProjectCard";
import ScrollContainer from "react-indiana-drag-scroll";
import Axios from "axios";
import AddCard from "../../components/add-card/AddCard";
import { useAuth } from "../../hooks/use-auth";

//css
import "./ProjectList.css";

const ProjectList = ({ tags, id, type }) => {
  const [projectsArray, setProjectsArray] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  const [limit] = React.useState(5);
  const { isAuth } = useAuth();

  const loadProjects = async () => {
    await Axios.get(
      `/api/getProjectsOfThisType/${type}/${offset}/${limit}`
    )
      .then((response) => {
        const newArray = response.data;
        setProjectsArray((prevArray) => [...prevArray, ...newArray]);
        setOffset((prevOffset) => prevOffset + limit);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useState(() => {
    loadProjects();
  }, []);

  let projects = projectsArray.map((project) => {
    return <ProjectCard key={project.id} project={project} />;
  });

  if (isAuth) {
    projects = [...projects, <AddCard key={projects.length + 1} path="/add" />];
  }

  if (projects.length === 0) {
    return;
  }

  return (
    <div className="project-list" id={id}>
      <div className="tag_container">
        <h1 className="tag__font">{tags}</h1>
      </div>
      <div className="project-list_items-container">
        <ScrollContainer
          onEndScroll={loadProjects}
          hideScrollbars={false}
          className="project-list_items scroll-container"
        >
          {projects}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default ProjectList;
