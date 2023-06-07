import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";

import "./Navbar.css";

const Navbar = () => {
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  const { isAuth } = useAuth();
  const [auth, setAuth] = React.useState(isAuth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(removeUser());
    setAuth(false);
  };

  const element1 = document.getElementById("project1");
  const element2 = document.getElementById("project2");
  const element3 = document.getElementById("project3");

  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const toggleButtonRef = React.useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggleButtonRef.current &&
        menuRef.current &&
        !toggleButtonRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar_list">
        <li className="navbar_item item unselectable dropdown arrow-down">
          <a
            ref={toggleButtonRef}
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          >
            Проекты
            <img
              style={{ marginLeft: "0.5rem" }}
              src="/img/down-arrow.svg"
              width={"10px"}
              alt="down-arrow"
            />
          </a>
          {menuOpen && (
            <div ref={menuRef} className="dropdown-menu show">
              {!element1 ? null : (
                <Link
                  style={{ cursor: "pointer" }}
                  to="project1"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="dropdown-item"
                >
                  Жилье - офисы
                </Link>
              )}
              {!element2 ? null : (
                <Link
                  style={{ cursor: "pointer" }}
                  to="project2"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="dropdown-item"
                >
                  Спорт - культура - образование
                </Link>
              )}
              {!element3 ? null : (
                <Link
                  style={{ cursor: "pointer" }}
                  to="project3"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="dropdown-item"
                >
                  Ландшафт - градостроительство
                </Link>
              )}
            </div>
          )}
        </li>
        <li className="navbar_item item unselectable">
          <Link
            style={{ cursor: "pointer" }}
            to="news"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            О нас
          </Link>
        </li>
        <li className="navbar_item item_main unselectable">
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="navbar_item__title unselectable"
          >
            MODUS
          </Link>
        </li>
        <li className="navbar_item item unselectable">
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Контакты
          </Link>
        </li>
        <li className="navbar_item item unselectable">
          {!auth ? (
            <LinkRouter
              className="navbar_item__none-link"
              to="/login"
              style={{ cursor: "pointer" }}
            >
              Вход
            </LinkRouter>
          ) : (
            <a
              onClick={logOut}
              className="navbar_item__none-link"
              style={{ cursor: "pointer" }}
            >
              Выход
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
