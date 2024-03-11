import React, { useState, useEffect } from "react";
import "./styles/Card.css";
import { shortenPlatforms } from "./utils/shortenPlatforms";
import _ from "lodash";
import LazyLoad from "react-lazy-load";
import { fixedPrices } from "./utils/fixedPrices";
import { offer } from "./utils/offer";
import { newPrice } from "./utils/newPrice";
import "@fortawesome/fontawesome-free/css/all.css";
import { v4 as uuidv4 } from "uuid";

function Card({
  image,
  name,
  metacritic,
  platforms,
  genres,
  setBrowseToggle,
  setGameId,
  game_id,
  setCallOnce,
  metacritic_url,
  setToggleHome,
  setStoreId,
  storeId,
}) {
  function handleCardFocus(id) {
    setBrowseToggle(false);
    setGameId(id);
    setCallOnce(false);
    setToggleHome(false);
  }

  function addToCart(id, gameName) {
    setStoreId((s) => [
      ...storeId,
      {
        id: uuidv4(),
        name: gameName,
        oldPrice: fixedPrices(id),
        offer: offer(id),
        updatedPrice: newPrice(fixedPrices(id), offer(id)),
      },
    ]);
  }

  return (
    <div className="card">
      <div className="top-half-card">
        <LazyLoad height={170} offset={100}>
          <img
            onClick={() => {
              handleCardFocus(game_id);
            }}
            className="card-image"
            src={image}
            alt={`${name}-image`}
          />
        </LazyLoad>
      </div>

      <div className="bottom-half-card">
        <div>
          <span
            onClick={() => {
              handleCardFocus(game_id);
            }}
            className="span-name">
            {name}
          </span>
          {metacritic && (
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
          )}
        </div>
        <div className="platforms">
          {platforms &&
            platforms.slice(0, 3).map((platform, index) => (
              <span key={index} className="platform-">
                {shortenPlatforms(platform.platform.name)}
              </span>
            ))}
        </div>
        <div>
          <span
            onClick={() => {
              handleCardFocus(game_id);
            }}
            className="offer">
            Sconto {offer(game_id)}%
          </span>
        </div>
        <div>
          <span className="price line-through">{fixedPrices(game_id)}€</span>
          <span className="new-price">
            {newPrice(fixedPrices(game_id), offer(game_id))}€
          </span>
          <span
            className="add-to-cart-button"
            onClick={() => {
              addToCart(game_id, name);
            }}>
            <i className="fa-solid fa-cart-plus"></i>
          </span>
        </div>
        <div className="genres-div">
          {genres &&
            genres.slice(0, 3).map((genre, index) => (
              <span key={index} className="focus-genre">
                {genre.name}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
