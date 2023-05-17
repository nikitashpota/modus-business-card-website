import Navbar from "../../components/navbar/Navbar";
import Contacts from "../contacts/Contacts";
import Main from "../main/Main";
import News from "../news/News";
import ProjectList from "../projects-list/ProjectList";

import React from "react";

import "./MainContainer.css";

function MainContainer() {
  return (
    <div className="app">
      <div className="app_navbar">
        <Navbar />
      </div>
      <Main title="Main" id="main" />
      <ProjectList tags="Жилье - офисы" id="project1" type="Housing" />
      <ProjectList
        tags="Спорт - культура - образование"
        id="project2"
        type="Public"
      />
      <ProjectList
        tags="Ландшафт - градостроительство"
        id="project3"
        type="City"
      />
      <News id="news" />
      <Contacts id="contacts" />
    </div>
  );
}

export default MainContainer;
