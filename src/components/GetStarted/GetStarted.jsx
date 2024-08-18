import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper" id="Started">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className=" primaryText">
            Get Started with <span className="hmz"> Homyz</span>
          </span>
          <span className=" secondaryText">
            Subscribe and find super atractive price quotes
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:benaliyousri00@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
