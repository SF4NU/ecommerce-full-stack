import React, { useState, useEffect } from "react";
import Card from "./Cards/Card";
import "./styles/MainContent.css";
import axios from "axios";

function MainContent() {
  const KEY = import.meta.env.VITE_API_KEY;
  const [callOnce, setCallOnce] = useState(false);
  const [data, setData] = useState([{}]);

  useEffect(() => {
    if (!callOnce) {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            `https://api.rawg.io/api/games?key=${KEY}`
          );
          await setData(res.data.results);
        } catch (error) {
          console.error(error);
        } finally {
          setCallOnce(true);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <>
      <section className="game-cards">
        <div className="search-bar-div">
          <input placeholder="Enter game name" type="text" />
        </div>
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
      </section>
    </>
  );
}

export default MainContent;
