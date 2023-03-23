import React from "react";
import classes from "./heroBanner.module.css";

function HeroBanner() {
  return (
    <div className={classes.hero_banner_container}>
      <div className={classes.overlay} />
      <h2>Discover Pakistan</h2>
      <p>
        Discover Pakistan's Cultural and Natural Wonders in Style with Our
        Exclusive Tours
      </p>

      <p>
        Indulge in the Marvels of Pakistan's Culture and Nature with Our
        Magnificent Excursions{" "}
      </p>
    </div>
  );
}

export default HeroBanner;
