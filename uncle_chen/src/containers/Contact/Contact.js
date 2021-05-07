import React, { Component, useEffect } from "react";
import "../Component.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  let language = localStorage.getItem("i18nextLng");
  return (
    <div className="body">
      <div className="tabStyle">
        <h1>{t("contact.title")}</h1>
        <br />
        <h3>{t("contact.tel")}: +1(646)831-2253</h3>
        <h3>
          {t("contact.fax")}: {t("other.unavailable")}
        </h3>
        <h3>{t("contact.email")}: contactnow@chenxin.com</h3>
        <h3>
          {t("contact.address")}:{" "}
          <div>
            3821 8th Avenue
            <br />
            Brooklyn NY 11232
          </div>
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.2095132683967!2d-73.99915698459705!3d40.647311779339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25acf99e2367b%3A0x301534240b3648e1!2s3821%208th%20Ave%2C%20Brooklyn%2C%20NY%2011232!5e0!3m2!1sen!2sus!4v1610827968387!5m2!1sen!2sus"
          width="300"
          height="225"
          frameborder="0"
          style={{ border: "0" }}
          aria-hidden="false"
          tabindex="0"
        />
      </div>
    </div>
  );
};

export default React.memo(Contact);
