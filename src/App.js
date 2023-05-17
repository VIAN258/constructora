import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import  Header  from './components/Header';
import  Features  from './components/Features';
import JsonData from "./data/data.json";
import Navbar1 from './components/Navbar1';
import Navbarboss from './components/Navbarboos';
import Navbarboos from "./components/Navbarboos";


function App() {

   const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navbarboos/>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
    </>
  );
}

export default App;
