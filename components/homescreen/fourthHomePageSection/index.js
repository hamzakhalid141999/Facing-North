import React from "react";
import classes from "./fourthHomePageSection.module.css";
import lifestyle from "../../../public/assets/homepage/lifestyle_img.png";
import experience from "../../../public/assets/homepage/experience_img.png";
import wellness from "../../../public/assets/homepage/wellness_img.png";
import right_arrow from "../../../public/assets/homepage/right-arrow.svg";
import pin from "../../../public/assets/homepage/sun.svg";

function FourthHomePageSection() {
  return (
    <div className={classes.container}>
      <div className={classes.single_tab}>
        <div className={classes.overlay}>
          <p>Experiences</p>
          <div className={classes.icon_container}>
            <img src={right_arrow.src} style={{ width: "25px" }} />
          </div>
        </div>
        <img src={experience.src} className={classes.bg_img} />
      </div>
      <div className={classes.single_tab}>
        <div className={classes.overlay}>
          <p>Lifestyle</p>
          <div className={classes.icon_container}>
            <img src={right_arrow.src} style={{ width: "25px" }} />
          </div>
        </div>

        <img src={lifestyle.src} className={classes.bg_img} />
      </div>
      <div className={classes.single_tab}>
        <div className={classes.overlay}>
          <p>Wellness</p>
          <div className={classes.icon_container}>
            <img src={right_arrow.src} style={{ width: "25px" }} />
          </div>
        </div>
        <img src={wellness.src} className={classes.bg_img} />
      </div>
    </div>
  );
}

export default FourthHomePageSection;
