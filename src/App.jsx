import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainContent from "./MainContent/MainContent";
import SubHeader from "./SubHeader/SubHeader";

function App() {
  const [toggleHome, setToggleHome] = useState(true);
  const [toggleCart, setToggleCart] = useState(false);

  return (
    <>
      <Header setToggleHome={setToggleHome} setToggleCart={setToggleCart} />
      {toggleHome && <SubHeader />}
      <MainContent toggleCart={toggleCart} />
      <Footer />
    </>
  );
}

export default App;
