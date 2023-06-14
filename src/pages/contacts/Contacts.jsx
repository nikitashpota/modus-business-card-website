import React from "react";
import "./Contacts.css";
import MyMap from "../../components/my-map/MyMap";

const Contacts = ({ id }) => {
  return (
    <>
      <hr
        style={{
          height: "1px",
          borderWidth: "0",
          color: "gray",
          backgroundColor: "gray",
        }}
      />
      <div className="contacts" id={id}>
        <h2 className="contacts_title tag__font">Контакты</h2>
        <div className="contacts_data">
          <div className="contacts_address contacts_item">
            <p className="contacts_text left">
              Наш адрес:
              <br />
              Россия, 123456, Москва,
              <br />
              2-я Брестская улица 5,
              <br />3 этаж
            </p>
          </div>
          <div className="contacts_email contacts_item">
            <p className="contacts_text right">
              По общим вопросам:
              <br />
              <a className="contacts_text__mail" href="mailto:modus@modus.ru">
                modus@modus.ru
              </a>
              <br />
              По вопросам сотрудничества:
              <br />
              <a className="contacts_text__mail" href="mailto:modus@modus.ru">
                modus@modus.ru
              </a>
              <br />
              Резюме и портфолио:
              <br />
              <a className="contacts_text__mail" href="mailto:modus@modus.ru">
                modus@modus.ru
              </a>
              <br />
            </p>
          </div>
        </div>
        <div className="contacts_map">
          <MyMap />
        </div>
        <div className="contacts_footer">
          <p className="contacts_footer__text">ООО Модус © 2023</p>
          <img
            className="contacts_footer__icon"
            width={30}
            src="/img/telegram-icon.svg"
          />
          <img
            className="contacts_footer__icon"
            width={30}
            src="/img/github-icon.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Contacts;
