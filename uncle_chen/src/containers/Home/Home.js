import React, { Component, useEffect } from "react";
import "../Component.css";
import { useTranslation } from "react-i18next";
import titleImage from "./homeTitleImage.jpg";

const Home = () => {
  const { t, i18n } = useTranslation();
  let language = localStorage.getItem("i18nextLng");
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>{t("home.title.main")}</h1>
        <h3>{t("home.title.sub")}</h3>
      </div>
      <div style={{ textAlign: "center" }}>
        <img img src={titleImage} alt="Marble Sink" />
      </div>
    </div>
  );
};

export default React.memo(Home);
