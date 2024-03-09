import React, { useEffect, useState } from "react";
import "./styles/GamePage.css";
import { shortenPlatforms } from "../Cards/utils/shortenPlatforms";
import "@fortawesome/fontawesome-free/css/all.css";
import { getIcons } from "../Cards/utils/getIcons";
import { time } from "../Cards/utils/time";
import { scrollToTop } from "../Cards/utils/scrollToTop";
import DOMPurify from "dompurify";
import { esrbConverter } from "../Cards/utils/esrbConverter";

function GamePage({
  gameName,
  image,
  description,
  secondImage,
  developers,
  rating,
  metacritic,
  metacritic_url,
  platforms,
  stores,
  website,
  genres,
  setBrowseToggle,
  setGameId,
  setCallOnce,
}) {
  function cutSpanishText(text, word) {
    const index = text.index;
  }

  function goBack() {
    setBrowseToggle(true);
    setCallOnce(false);
    setGameId(null);
  }

  useEffect(() => {
    const scrollAfterMount = async () => {
      await time(200);
      scrollToTop();
      console.log("done");
      console.log(rating);
    };
    scrollAfterMount();
  }, []);

  const purifiedHTML = DOMPurify.sanitize(description);

  return (
    <>
      <section className="focus-game-section">
        <div>
          <button onClick={goBack} className="go-back-button">
            Torna indietro
          </button>
        </div>
        <div className="focus-game-wrapper">
          <div className="focus-game-image-wrapper">
            <img
              className="focus-game-image"
              src={image}
              alt={`${gameName}-image`}></img>
          </div>
          <div className="focus-game-details">
            <span className="rating-esrb">
              <img src={esrbConverter(rating)}></img>
            </span>
            <div className="focus-game-details-flex"></div>
            <div>
              <span className="focus-game-title">{gameName}</span>
            </div>
            <div className="focus-genres-div">
              {genres.length > 0 &&
                genres.map((genre, index) => (
                  <span className="focus-genre" key={index}>
                    {genre.name}
                  </span>
                ))}
            </div>
            <div className="focus-platforms-div">
              {platforms.length > 0 &&
                platforms.map((platform, index) => (
                  <span className="platform-" key={index}>
                    {shortenPlatforms(platform.platform.name)}
                    <span> </span>
                    <i className={getIcons(platform.platform.name)}></i>
                  </span>
                ))}
            </div>
            {/* <div className="focus-stores-div">
              {stores.length > 0 &&
                stores.map((store, index) => (
                  <span className="stores" key={index}>
                    {store.store.name}
                  </span>
                ))}
            </div> */}
          </div>
          <div className="focus-game-bottom-details">
            <div>
              <span>Descrizione: </span>
              <div dangerouslySetInnerHTML={{ __html: purifiedHTML }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GamePage;
