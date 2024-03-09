import React, { useState, useEffect } from "react";
import Card from "./Cards/Card";
import "./styles/MainContent.css";
import axios from "axios";
import GamePage from "./GamePage.jsx/GamePage";

function MainContent() {
  const KEY = import.meta.env.VITE_API_KEY;
  const [callOnce, setCallOnce] = useState(false);
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [focusCard, setFocusCard] = useState(false);
  const [browseToggle, setBrowseToggle] = useState(true);
  const [gameId, setGameId] = useState(null);
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
        {browseToggle && data && data.length > 0 && (
          <div className="main-cards-div">
            {data.map((game, index) => (
              <Card
                key={index}
                setBrowseToggle={setBrowseToggle}
                setFocusCard={setFocusCard}
                setGameId={setGameId}
                image={game.background_image}
                name={game.name}
                metacritic={game.metacritic}
                game_id={game.id}
                setCallOnce={setCallOnce}
                platform1={
                  game.platforms && game.platforms.length > 0
                    ? game.platforms[0].platform.name
                    : false
                }
                platform2={
                  game.platforms && game.platforms.length > 1
                    ? game.platforms[1].platform.name
                    : false
                }
                platform3={
                  game.platforms && game.platforms.length > 2
                    ? game.platforms[2].platform.name
                    : false
                }
                genre1={
                  game.genres && game.genres.length > 0
                    ? game.genres[0].name
                    : false
                }
                genre2={
                  game.genres && game.genres.length > 1
                    ? game.genres[1].name
                    : false
                }
                genre3={
                  game.genres && game.genres.length > 2
                    ? game.genres[2].name
                    : false
                }
              />
            ))}
          </div>
        )}
      </section>
      <div className="focus-game-section">
        {!browseToggle && gameId && (
          <div className="main-page-game">
            <GamePage gameName={data.name} image={data.background_image} />
          </div>
        )}
      </div>
    </>
  );
}

export default MainContent;
