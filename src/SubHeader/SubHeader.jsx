import React, { useState } from "react";
import baldur from "./images/baldurs.jpg";
import "./styles/SubHeader.css";

function SubHeader() {
  return (
    <>
      <section className="sub-header">
        <div>
          <img className="baldur" src={baldur} alt="baldur" />
          <button>SCONTO 40%</button>
        </div>
      </section>
    </>
  );
}

export default SubHeader;
