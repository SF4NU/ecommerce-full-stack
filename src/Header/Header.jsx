import React, { useState } from "react";
import "./styles/header.css";
import hamburger from "./assets/hamburger.svg";
function Header({ setToggleHome, setToggleCart, setBrowseToggle }) {
  function goTo() {
    setToggleHome(true);
    setBrowseToggle(true);
    setToggleCart(false);
  }

  function toggleCart() {
    setToggleCart(true);
    setToggleHome(false);
  }

  return (
    <>
      <header>
        <div className="top-left-header">
          <div>LOGO</div>
          <div>QuestQuasar</div>
        </div>
        <div className="top-right-header">
          <div
            onClick={() => {
              goTo();
            }}>
            Home
          </div>
          <div onClick={goTo}>Chi siamo</div>
          <div
            onClick={() => {
              toggleCart();
            }}>
            Carrello
          </div>
          <div className="profile-div" onClick={goTo}>
            Profilo
          </div>
          <div className="hamburger-div">
            <img
              className="hamburger"
              src={hamburger}
              alt="hamburger-menu"></img>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
