import React, { useState, useRef } from "react";
import "./styles/header.css";
import hamburger from "./assets/hamburger.svg";
import cross from "./assets/cross.svg";
import { time } from "../MainContent/Cards/utils/time";
function Header({
  setToggleHome,
  setToggleCart,
  setBrowseToggle,
  setToggleHeader,
  toggleHeader,
  setToggleAbout,
  setChangeGameIdAndRecall,
  changeGameIdAndRecall,
}) {
  const sidebarRef = useRef(null);

  const [changeHeaderIcon, setChangeHeaderIcon] = useState(hamburger);

  function goTo() {
    setToggleHome(true);
    setBrowseToggle(true);
    setToggleCart(false);
    setChangeGameIdAndRecall(!changeGameIdAndRecall);
    setToggleAbout(false);
  }

  function toggleCart() {
    setToggleCart(true);
    setToggleHome(false);
    setToggleAbout(false);
  }

  function toggleAboutComponent() {
    setToggleCart(false);

    setToggleAbout(true);
    setToggleHome(false);
  }

  function toggleSideBar() {
    setToggleHeader(!toggleHeader);
    sidebarRef.current.classList.toggle("display-side-bar");
    changeHeaderIcon === hamburger
      ? setChangeHeaderIcon(cross)
      : setChangeHeaderIcon(hamburger);
    const toggleAnimation = async () => {
      await time(500);
      homeRef.current.classList.add("display-button");
    };
  }

  return (
    <>
      <header>
        <div className="top-left-header">
          {/* <div>LOGO</div> */}
          <div
            onClick={() => {
              goTo();
            }}>
            QuestQuasar
          </div>
        </div>
        <div className="top-right-header">
          <div
            onClick={() => {
              goTo();
            }}>
            Home
          </div>
          <div onClick={toggleAboutComponent}>Chi siamo</div>
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
              src={changeHeaderIcon}
              alt="hamburger-menu"
              onClick={toggleSideBar}></img>
          </div>
        </div>
      </header>
      <div ref={sidebarRef} className="side-bar-div">
        <div className="side-bar-div-container">
          <div
            onClick={() => {
              toggleSideBar();
              goTo();
            }}>
            Home
          </div>
          <hr></hr>
          <div
            onClick={() => {
              toggleSideBar();
              toggleAboutComponent();
            }}>
            Chi siamo
          </div>
          <hr></hr>
          <div
            onClick={() => {
              toggleSideBar();
              toggleCart();
            }}>
            Carrello
          </div>
          <hr></hr>
          <div className="profile-div" onClick={goTo}>
            Profilo
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Header;
