import React, { useState, useEffect } from "react";
import Card from "./Cards/Card";
import "./styles/MainContent.css";
import axios from "axios";
import GamePage from "./GamePage.jsx/GamePage";
import Cart from "./Cart/Cart";
import About from "./About/About";
import Profile from "./Profile/Profile";

function MainContent({
  toggleCart,
  setToggleHome,
  toggleHome,
  browseToggle,
  setBrowseToggle,
  toggleAbout,
  changeGameIdAndRecall,
  toggleProfile,
}) {
  const KEY = import.meta.env.VITE_API_KEY;
  const [callOnce, setCallOnce] = useState(false);
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [gameId, setGameId] = useState(null);
  const [storeId, setStoreId] = useState(() => {
    const storedData = localStorage.getItem("storeId");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("storeId", JSON.stringify(storeId));
    console.log(storeId);
  }, [storeId]);

  useEffect(() => {
    if (!callOnce) {
      const fetchData = async () => {
        try {
          let URL = ``;
          if (!gameId) {
            URL = `https://api.rawg.io/api/games?search=${query}&key=${KEY}`;
            console.log("1");
          } else {
            URL = `https://api.rawg.io/api/games/${gameId}?key=${KEY}`;
            console.log("2");
          }
          const res = await axios.get(URL);
          if (!gameId) {
            await setData(res.data.results);
          } else {
            await setData(res.data);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setCallOnce(true);
        }
      };
      fetchData();
    }
  }, [callOnce]);

  useEffect(() => {
    setCallOnce(false);
    setGameId(null);
  }, [changeGameIdAndRecall]);

  function handleSearch() {
    setCallOnce(!callOnce);
  }

  useEffect(() => {
    console.log(data);
    console.log(gameId);
  }, [data]);

  return (
    <>
      <section className="game-cards">
        {browseToggle && !toggleAbout && !toggleProfile && !toggleCart && (
          <div className="search-bar-div">
            <input
              value={query}
              placeholder="Cerca giochi..."
              type="text"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setCallOnce(!callOnce);
                }
              }}
            />
            <button
              className="fetch-games-button"
              onClick={() => {
                handleSearch();
              }}>
              Cerca
            </button>
          </div>
        )}
        {browseToggle &&
          !toggleCart &&
          !toggleAbout &&
          !toggleProfile &&
          data &&
          data.length > 0 && (
            <div className="main-cards-div">
              {data.map((game, index) => (
                <Card
                  key={index}
                  setBrowseToggle={setBrowseToggle}
                  setGameId={setGameId}
                  image={game.background_image}
                  name={game.name}
                  metacritic={game.metacritic}
                  metacritic_url={game.metacritic_url}
                  game_id={game.id}
                  setCallOnce={setCallOnce}
                  platforms={
                    game.platforms &&
                    game.platforms.length >= 0 &&
                    game.platforms
                  }
                  genres={game.genres.length > 0 && game.genres}
                  setStoreId={setStoreId}
                  setToggleHome={setToggleHome}
                  storeId={storeId}
                />
              ))}
            </div>
          )}
      </section>
      <div className="focus-game-section">
        {!browseToggle &&
          !toggleCart &&
          !toggleProfile &&
          !toggleAbout &&
          gameId && (
            <div className="main-page-game">
              <GamePage
                gameName={data.name}
                image={data.background_image}
                description={data.description}
                secondImage={data.background_image_additional}
                developers={
                  data.developers && data.developers.length > 0
                    ? data.developers
                    : []
                }
                rating={data.esrb_rating ? data.esrb_rating.name : null}
                metacritic={data.metacritic ? data.metacritic : false}
                metacritic_url={data.metacritic_url}
                platforms={
                  data.platforms && data.platforms.length > 0
                    ? data.platforms
                    : []
                }
                stores={
                  data.stores && data.stores.length > 0 ? data.stores : []
                }
                website={data.website ? data.website : false}
                genres={
                  data.genres && data.genres.length > 0 ? data.genres : []
                }
                setBrowseToggle={setBrowseToggle}
                setGameId={setGameId}
                setCallOnce={setCallOnce}
                setStoreId={setStoreId}
                setToggleHome={setToggleHome}
                storeId={storeId}
              />
            </div>
          )}
      </div>
      {toggleCart && <Cart storeId={storeId} setStoreId={setStoreId} />}
      {toggleAbout && <About />}
      {toggleProfile && <Profile />}
    </>
  );
}

export default MainContent;
