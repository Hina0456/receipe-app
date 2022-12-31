import React from "react";
import Data from "./DataFood";

function Recipes() {
  return (
    <div>
      <div className="wrapper">
        {Data.map((items) => (
          <div className="Recipe">
            <div className="Recipe-name">
              <h2>{items.name} </h2>
            </div>
            <div
              className="Recipe-main"
              style={{ backgroundImage: `url(${items.imgsrc})` }}
            >
              {/* <div className="Recipes-img">
                <img src={items.imgsrc} alt="img" />
              </div> */}

              <div className="Recipe-Ingredients ">
                <div className="Ingredients_heading">
                  <h2>Ingredients of Recipe </h2>
                </div>
                <br />
                <ol className="Ingredients-list">
                  {items.title.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="Recipe-steps">
              <h1> Recipe Step..</h1>
              {items.para.map((data, index) => (
                <>
                  <h4>Step {index + 1} :</h4>
                  <p>{data}</p>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="contact">
        <h1>CONTECT</h1>

        <form>
          <input type="text" placeholder="Name..." />
          <input type="text" placeholder="Email.." />
          <input type="text" placeholder="massage/speical Requirements.." />
          <br />
          <button>send Massage</button>
        </form>
      </div>
      <div className="footer">
        <p>All Recipes Are Very Amazing.</p>
        <p>you Try All Recipes.</p>
        <p>I Belief You Like All Recipes.</p>
      </div>
    </div>
  );
}

export default Recipes;
