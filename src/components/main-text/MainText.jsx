import React from "react";
import Typed from "typed.js";

const MainText = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        `<h4>MODUS - бюро современной архитектуры</h4>`,
      ],
      typeSpeed: 40,
      cursorChar: "",
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return <p className="main_text__value" id="main-text" ref={el}></p>;
};

export default MainText;
