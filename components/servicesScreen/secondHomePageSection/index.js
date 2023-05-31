import React from "react";
import classes from "./secondHomePageSection.module.css";
import second_section_bg from "../../../public/assets/homepage/second_section_bg.png";
import second_section_pic1 from "../../../public/assets/homepage/second_section_pic1.png";
import second_section_pic2 from "../../../public/assets/homepage/second_section_pic2.png";
import BestPlacesCards from "../components/bestPlacesCards";

import place_1 from "../../../public/assets/destination_detail_assets/card1.png";
import place_2 from "../../../public/assets/destination_detail_assets/card2.png";
import place_3 from "../../../public/assets/destination_detail_assets/card3.png";

function SecondHomePageSection() {
  return (
    <div className={classes.container}>
      <div className={classes.single_row}>
        <div className={classes.left_panel}>
          <h2>Exclusive to your world</h2>
          <p>
            Experience the ultimate adventure in Pakistan with our custom
            itineraries that combine trekking, yoga, and outdoor adventures.
            From the Karakoram mountain range to the Neelum River, Pakistan has
            something for every traveler. Let us craft an unforgettable journey.
            Don't miss out on this opportunity to explore the very best that
            Pakistan has to offer.
          </p>
        </div>
        <div className={classes.right_panel}>
          <div className={classes.img_container}>
            <img className={classes.img1} src={second_section_pic1.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
