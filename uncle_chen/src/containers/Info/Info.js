import React, { Component, useEffect } from "react";
import "../Component.css";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t, i18n } = useTranslation();
  let language = localStorage.getItem("i18nextLng");
  return (
    <div>
      <div className="tabStyle">
        <h1>{t("info.title")}</h1>
        <br />
        <h4>{t("info.paragraph.1")}</h4>
        <h4>{t("info.paragraph.2")}</h4>
        <h4>{t("info.paragraph.3")}</h4>
      </div>
      <br />
    </div>
  );
};

export default React.memo(Info);
