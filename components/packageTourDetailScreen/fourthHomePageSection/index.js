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
      <div className={classes.contact_info_section}>
        <h3>Start planning your trip With Us</h3>
        <div className={classes.contact_us_row}>
          <p className={classes.contact_us_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl
            libero, ornare non libero vitae, vestibulum egestas tellus.
            Curabitur sodales eleifend sem laoreet varius.
          </p>
          <div className={classes.btn}>
            <p>Contact Us</p>
          </div>
        </div>
        <div className={classes.contact_info_row}>
          <div className={classes.single_info_row}>
            <img src={phone.src} />
            <p className={classes.contact_text}>+92 333 4444</p>
          </div>
          <div className={classes.single_info_row}>
            <img src={email.src} />
            <p className={classes.contact_text}>info@abcd.com</p>
          </div>
        </div>
      </div>
      <div className={classes.feedback_section}>
        <h2>Reviews</h2>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img src={girl_pic.src} className={classes.img} />
            <div className={classes.review_container}>
              <h3>Bella Morgan</h3>
              <div className={classes.stars_container}>
                <img src={star_filled.src} className={classes.star} />
                <img src={star_filled.src} className={classes.star} />
                <img src={star_filled.src} className={classes.star} />
                <img src={star_filled.src} className={classes.star} />
                <img src={star_filled.src} className={classes.star} />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                finibus urna. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum.{" "}
              </p>
              <div className={classes.btn}>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
