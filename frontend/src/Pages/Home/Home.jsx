import React, { useState } from "react";
import "./Home.css";
import Header from "../../Header/Header.jsx";
import Explore from "../../Components/ExploreMenu/Explore.jsx";
import FoodDisplay from "../../FoodDisplay/FoodDisplay.jsx";
import AppDownload from "../../AppDownload/AppDownload.jsx";

function Home() {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <Header />
      <Explore category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
