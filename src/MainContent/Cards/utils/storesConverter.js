import gog from "../../GamePage.jsx/assets/GOG.com.svg";
import steam from "../../GamePage.jsx/assets/steam.svg";
import apple from "../../GamePage.jsx/assets/appstore.svg";
import ps from "../../GamePage.jsx/assets/psstore.svg";
import nintendo from "../../GamePage.jsx/assets/nintendo.svg";
import google from "../../GamePage.jsx/assets/googlestore.svg";
import xbox from "../../GamePage.jsx/assets/xbox.svg";
import xbox360 from "../../GamePage.jsx/assets/xbox360.svg";
import epic from "../../GamePage.jsx/assets/epicstore.svg";

export const storesConverter = (store) => {
  return store === "Steam"
    ? steam
    : store === "GOG"
    ? gog
    : store === "App Store"
    ? apple
    : store === "PlayStation Store"
    ? ps
    : store === "Nintendo Store"
    ? nintendo
    : store === "Google Play"
    ? google
    : store === "Xbox Store"
    ? xbox
    : store === "Xbox 360 Store"
    ? xbox360
    : store === "Epic Games"
    ? epic
    : null;
};
