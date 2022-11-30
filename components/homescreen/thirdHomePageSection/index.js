import React, { useState, useEffect } from "react";
import classes from "./thirdHomePageSection.module.css";
import explore_pic_1 from "../../../public/assets/homepage/explore_pic_1.png";
import explore_pic_2 from "../../../public/assets/homepage/explore_pic_2.png";
import explore_pic_3 from "../../../public/assets/homepage/explore_pic_3.png";
import globe from "../../../public/assets/homepage/globe.png";
import places1 from "../../../public/assets/homepage/places1.png";
import PlacesCards from "../components/placesCards";
import compass from "../../../public/assets/homepage/compass.svg";
import wind from "../../../public/assets/homepage/wind.svg";
import sun from "../../../public/assets/homepage/sun.svg";
import pin from "../../../public/assets/homepage/stroke_pin.svg";

function ThirdHomePageSection() {
  const [location, setLocation] = useState(1);

  return (
    <div className={classes.container}>
      <img src={globe.src} className={classes.globe} />
      <div className={classes.location_container}>
        <div className={classes.content_container}>
          <div className={classes.location_pic_container}>
            <img src={places1.src} />
          </div>
          <div className={classes.info_container}>
            <div className={classes.indicators}>
              <div className={classes.single_indicator}>
                <img className={classes.indicator_img} src={compass.src} />
                <p>NNW</p>
              </div>
              <div className={classes.single_indicator}>
                <img className={classes.indicator_img} src={wind.src} />
                <p>3 mgh</p>
              </div>
              <div className={classes.single_indicator}>
                <img className={classes.indicator_img} src={sun.src} />
                <p>28 deg</p>
              </div>
            </div>
            <p className={classes.place_area_name}>Kashmir</p>
            <div className={classes.location_container_row}>
              <img src={pin.src} className={classes.pin} />
              <p className={classes.place_name}>Neelum Valley</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.title_section}>
        <h2>Explore our Worlds</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus.
        </p>
        <div className={classes.cards_container}>
          <div className={classes.cards_carousel}>
            <PlacesCards pic={explore_pic_3} />
            <PlacesCards pic={explore_pic_2} />
            <PlacesCards pic={explore_pic_1} />
          </div>
        </div>

        <h2>Lands of Discovery</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus.
        </p>
        <div className={classes.row}>
          <p
            onClick={() => {
              setLocation(1);
            }}
            style={{ borderBottom: location === 1 && "2px solid black" }}
          >
            Gilgit
          </p>
          <p
            onClick={() => {
              setLocation(2);
            }}
            style={{ borderBottom: location === 2 && "2px solid black" }}
          >
            Kashmir
          </p>
          <p
            onClick={() => {
              setLocation(3);
            }}
            style={{ borderBottom: location === 3 && "2px solid black" }}
          >
            Swat
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdHomePageSection;
