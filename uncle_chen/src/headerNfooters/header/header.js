import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Home from "../../containers/Home/Home";
import { useTranslation } from "react-i18next";
import "../headerNfooter.css";

const Header = () => {
  const path = window.location.pathname;
  const { t, i18n } = useTranslation();
  let oppositeLanguage;
  let language = localStorage.getItem("i18nextLng");
  if (language === "en") {
    oppositeLanguage = "cn";
  } else {
    oppositeLanguage = "en";
  }

  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }
  return (
    <div>
      <Navbar className="topBar" variant="dark" expand="lg">
        <Navbar.Brand>{t("header.logo")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">{t("header.home")}</Nav.Link>
            <Nav.Link href="/info">{t("header.info")}</Nav.Link>
            <Nav.Link href="/achievement">{t("header.achievement")}</Nav.Link>
            <Nav.Link href="/contact">{t("header.contact")}</Nav.Link>
          </Nav>
          <Nav onClick={(selectedKey) => changeLanguage(oppositeLanguage)}>
            <Nav.Link class="langSetup" eventKey="changeLang">
              {t("langTo")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
