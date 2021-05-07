import React, { Component, useEffect } from "react";
import "../Component.css";
import { useTranslation } from "react-i18next";

const Achievement = () => {
  const { t, i18n } = useTranslation();
  let language = localStorage.getItem("i18nextLng");
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>{t("achievement.title")}</h1>
      </div>
      <br />
    </div>
  );
};

export default React.memo(Achievement);
