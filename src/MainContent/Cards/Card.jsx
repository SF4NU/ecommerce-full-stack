import React, { useState, useEffect } from "react";
import "./styles/Card.css";
import { shortenPlatforms } from "./utils/shortenPlatforms";
import _ from "lodash";

function Card({
  image,
  name,
  metacritic,
  platform1,
  platform2,
  platform3,
  genre1,
  genre2,
  genre3,
}) {
  const [randomPrice, setRandomPrice] = useState(_.random(50, 70));
  const [randomOffer, setRandomOffer] = useState(_.random(10, 50));

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
            {platform1 && (
              <span className="platform-1">{shortenPlatforms(platform1)}</span>
            )}
            &nbsp;
            {platform2 && (
              <span className="platform-2">{shortenPlatforms(platform2)}</span>
            )}
            &nbsp;
            {platform3 && (
              <span className="platform-3">{shortenPlatforms(platform3)}</span>
            )}
          </div>
          <div>
            <span className="offer">Sconto {randomOffer}%</span>
          </div>
          <div>
            <span className="price">{randomPrice}€</span>
          </div>
          <div className="genres-div">
            {genre1 && <span className="genre-1">{genre1}</span>}&nbsp;
            {genre2 && <span className="genre-2">{genre2}</span>}&nbsp;
            {genre3 && <span className="genre-3">{genre3}</span>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
