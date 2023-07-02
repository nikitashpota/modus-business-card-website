import React from "react";
import MainText from "../../components/main-text/MainText";
import Scene from "../../components/scene/Scene";
import { useInView } from "react-intersection-observer";

import "./Main.css";


const Main = ({ id }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div className="main" id={id}>
      <div className="main_container">
        <div className="main_image">
        </div>
        {/* <div ref={ref} className="main_art">
          {!inView ? null : <Scene />}
        </div> */}
        <div className="main_text">
          <MainText />
        </div>
      </div>
    </div>
  );
};

export default Main;
