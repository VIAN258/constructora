import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import  Header  from './components/Header';
import  Features  from './components/Features';
import JsonData from "./data/data.json";


function App() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navbar/>
      <Header/>
      <Features data={landingPageData.Features} />
    </>
  );
}

export default App;
