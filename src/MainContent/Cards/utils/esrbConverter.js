import M from "../../GamePage.jsx/assets/M.svg";
import T from "../../GamePage.jsx/assets/T.svg";
import A from "../../GamePage.jsx/assets/A.svg";
import E from "../../GamePage.jsx/assets/E.svg";

export const esrbConverter = (rating) => {
  return rating === "Mature"
    ? M
    : rating === "Teen"
    ? T
    : rating === "Adults Only"
    ? A
    : rating === "Everyone"
    ? E
    : rating === null
    ? E
    : null;
};
