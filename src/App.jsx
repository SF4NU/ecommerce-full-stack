import { useState, createContext } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainContent from "./MainContent/MainContent";
import SubHeader from "./SubHeader/SubHeader";

function App() {
  const [toggleHome, setToggleHome] = useState(true);
  const [toggleCart, setToggleCart] = useState(false);
  const [browseToggle, setBrowseToggle] = useState(true);
  const [toggleHeader, setToggleHeader] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);
  const [changeGameIdAndRecall, setChangeGameIdAndRecall] = useState(null);

  return (
    <>
      <Header
        setToggleHome={setToggleHome}
        setToggleCart={setToggleCart}
        setBrowseToggle={setBrowseToggle}
        setToggleHeader={setToggleHeader}
        toggleHeader={toggleHeader}
        setToggleAbout={setToggleAbout}
        toggleAbout={toggleAbout}
        setChangeGameIdAndRecall={setChangeGameIdAndRecall}
        changeGameIdAndRecall={changeGameIdAndRecall}
      />
      {toggleHome && !toggleHeader && <SubHeader />}
      {!toggleHeader && (
        <MainContent
          toggleCart={toggleCart}
          setToggleHome={setToggleHome}
          toggleHome={toggleHome}
          setBrowseToggle={setBrowseToggle}
          browseToggle={browseToggle}
          toggleAbout={toggleAbout}
          changeGameIdAndRecall={changeGameIdAndRecall}
        />
      )}
      {!toggleHeader && <Footer />}
    </>
  );
}

export default App;
