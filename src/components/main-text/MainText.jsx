import React from "react";
import Typed from "typed.js";

const MainText = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        `<h3 className = "main_text__header">MODUS - бюро современной архитектуры.</h3>
          <p>Мы создаем инновационные и продвинутые проекты.</p>
          <h3>Доверьте нам ваше будущее пространство.</h3>`,
      ],
      typeSpeed: 50,
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
