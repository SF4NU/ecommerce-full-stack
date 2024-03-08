import React, { useState, useEffect } from "react";
import "./styles/Card.css";
import { shortenPlatforms } from "./utils/shortenPlatforms";

function Card({ image, name, metacritic, platform1, platform2, platform3 }) {
  return (
    <>
      <div className="card">
        <div className="top-half-card">
          <img className="card-image" src={image} alt="" />
        </div>
        <div className="bottom-half-card">
          <div>
            <span className="span-name">{name}</span>
            <div className="meta-score-div">
              <div>
                <span>
                  <img
                    className="metacritic-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/48/Metacritic_logo.svg"
                    alt="metacritic-logo"
                  />
                </span>
              </div>
              <div>
                <span className="score">{metacritic}</span>
              </div>
            </div>
          </div>
          <div className="platforms">
            <span className="platform-1">{shortenPlatforms(platform1)}</span>
            &nbsp;
            <span className="platform-2">{shortenPlatforms(platform2)}</span>
            &nbsp;
            <span className="platform-3">{shortenPlatforms(platform3)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
