import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainContent from "./MainContent/MainContent";
import SubHeader from "./SubHeader/SubHeader";

function App() {
  return (
    <>
      <Header />
      <SubHeader/>
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
