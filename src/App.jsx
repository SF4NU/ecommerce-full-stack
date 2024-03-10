import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainContent from "./MainContent/MainContent";
import SubHeader from "./SubHeader/SubHeader";
import { set } from "lodash";

function App() {
  const [toggleHome, setToggleHome] = useState(true);
  const [toggleCart, setToggleCart] = useState(false);
  const [browseToggle, setBrowseToggle] = useState(true);

  return (
    <>
      <Header
        setToggleHome={setToggleHome}
        setToggleCart={setToggleCart}
        setBrowseToggle={setBrowseToggle}
      />
      {toggleHome && <SubHeader />}
      <MainContent
        toggleCart={toggleCart}
        setToggleHome={setToggleHome}
        toggleHome={toggleHome}
        setBrowseToggle={setBrowseToggle}
        browseToggle={browseToggle}
      />
      <Footer />
    </>
  );
}

export default App;
