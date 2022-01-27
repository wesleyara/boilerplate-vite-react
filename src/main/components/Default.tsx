import React from "react";
import logo from "../images/logo.svg";
import "../components-style/Default.scss";

export function Default() {
  return (
    <>
      <h1>Olá mundo!</h1>
      <div className="logoContainer">
        <img src={logo} alt="" />
      </div>
    </>
  );
}
