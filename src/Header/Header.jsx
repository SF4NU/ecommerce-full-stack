import React, { useState } from "react";
import "./styles/header.css";
import hamburger from "./assets/hamburger.svg";
function Header() {
  return (
    <>
      <header>
        <div className="top-left-header">
          <div>LOGO</div>
          <div>QuestQuasar</div>
        </div>
        <div className="top-right-header">
          <div>Home</div>
          <div>Negozio</div>
          <div>Chi siamo</div>
          <div className="profile-div">Profilo</div>
          <div className="hamburger-div">
            <img className="hamburger" src={hamburger} alt="hamburger-menu"></img>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
