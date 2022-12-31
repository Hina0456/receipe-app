import React from "react";
import DataFood from "./DataFood";
import Recipes from "./Recipes";
import "./styles.css";

const App = () => {
  console.log(DataFood);
  return (
    <>
      <div className="Header">
        <div className="logo_img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2nQM84q0rFjQWz74i5k7jt1pq-S_FiHxrA&usqp=CAU"
            alt="logo"
          />
        </div>
        <div className="Header_main">
          <h1>Hina kitchen</h1>
        </div>
      </div>
      <Recipes />
    </>
  );
};

export default App;
