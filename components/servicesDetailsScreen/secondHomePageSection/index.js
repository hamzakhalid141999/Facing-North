import React from "react";
import classes from "./secondHomePageSection.module.css";
import second_section_bg from "../../../public/assets/homepage/second_section_bg.png";
import second_section_pic1 from "../../../public/assets/homepage/second_section_pic1.png";
import second_section_pic2 from "../../../public/assets/homepage/second_section_pic2.png";
import BestPlacesCards from "../components/bestPlacesCards";

import place_1 from "../../../public/assets/destination_detail_assets/card1.png";
import place_2 from "../../../public/assets/destination_detail_assets/card2.png";
import place_3 from "../../../public/assets/destination_detail_assets/card3.png";

function SecondHomePageSection({ data }) {
  return (
    <div className={classes.container}>
      <img src={second_section_bg.src} className={classes.bg} />
      <div className={classes.second_section}>
        <h3>{data?.statement[0]}</h3>
      </div>
      <div className={classes.single_row}>
        <div className={classes.left_panel}>
          <h2>{data?.first_section_heading}</h2>
          <p>{data?.detailed_description}</p>
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
