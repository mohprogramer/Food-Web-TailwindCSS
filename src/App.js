import React from "react";
//Components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HeadlineCard from "./components/HeadlineCard";
import Foods from "./components/Foods";

function App() {
  return (
    <div >
      <Navbar />
      <Banner />
      <HeadlineCard />
      <Foods />
    </div>
  );
}

export default App;
