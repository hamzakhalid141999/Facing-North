import React from "react";
import classes from "./secondHomePageSection.module.css";
import second_section_bg from "../../../public/assets/homepage/second_section_bg.png";
import second_section_pic1 from "../../../public/assets/homepage/second_section_pic1.png";
import second_section_pic2 from "../../../public/assets/homepage/second_section_pic2.png";
import location from "../../../public/assets/package_tour_assets/location.svg";
import user from "../../../public/assets/package_tour_assets/user.svg";
import weather from "../../../public/assets/package_tour_assets/weather.svg";
import best_place from "../../../public/assets/package_tour_assets/best_place.svg";
import recommendation from "../../../public/assets/package_tour_assets/recommendation.svg";

function SecondHomePageSection() {
  return (
    <div className={classes.container}>
      <div className={classes.single_row}>
        <div className={classes.left_panel}>
          <h2>Overview of Pakistan</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
            finibus urna. In ut justo quis metus rhoncus cursus quis vitae
            magna. Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
            ipsum. Aenean lacus augue, sollicitudin eu eros eleifend, luctus
            ultricies lectus. Nam elementum tempor arcu, ut faucibus ligula
            pharetra eu.
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
