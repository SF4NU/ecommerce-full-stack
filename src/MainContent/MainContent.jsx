import React, { useState, useEffect } from "react";
import Card from "./Cards/Card";
import "./styles/MainContent.css";
import axios from "axios";

function MainContent() {
  const KEY = import.meta.env.VITE_API_KEY;
  const [callOnce, setCallOnce] = useState(false);
  const [data, setData] = useState([{}]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (!callOnce) {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            `https://api.rawg.io/api/games?search=${query}&key=${KEY}`
          );
          await setData(res.data.results);
          console.log("hello");
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
        {true && (
          <div className="main-cards-div">
            {data.map((game, index) => (
              <Card
                key={index}
                image={game.background_image}
                name={game.name}
                metacritic={game.metacritic}
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
    </>
  );
}

export default MainContent;
