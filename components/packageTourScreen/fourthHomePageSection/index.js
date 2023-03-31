import React from "react";
import classes from "./fourthHomePageSection.module.css";
import girl_pic from "../../../public/assets/destination_detail_assets/girl_placeholder.png";
import boy_pic from "../../../public/assets/destination_detail_assets/boy_placeholder.png";
import blog_bg from "../../../public/assets/destination_detail_assets/blog_bg.svg";
import star_filled from "../../../public/assets/destination_detail_assets/star_filled.svg";
import email from "../../../public/assets/contact_us_assets/email.svg";
import phone from "../../../public/assets/contact_us_assets/phone.svg";

function FourthHomePageSection() {
  return (
    <div className={classes.container}>
      <div className={classes.blogs_section}>
        <div className={classes.overlay} />
        <h3>Blogs</h3>
        <div className={classes.btn_white}>
          <p>EXPLORE</p>
        </div>
      </div>
    </div>
  );
}

export default FourthHomePageSection;
