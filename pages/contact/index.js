import React from "react";
import classes from "./contact.module.css";
import right_arrow from "../../public/assets/contact_us_assets/right_arrow.svg";
import email from "../../public/assets/contact_us_assets/email.svg";
import phone from "../../public/assets/contact_us_assets/phone.svg";
import Link from "next/link";

function Contact() {
  return (
    <div className={classes.container}>
      <div className={classes.hero_banner_container}>
        <div className={classes.overlay} />
        <h2>Find an unforgettable experience in Pakistan</h2>
        <p>
          Looking for a memorable travel experience? Let us help you plan your
          next adventure in Pakistan. Contact us for personalized travel
          recommendations and itinerary planning.
        </p>
      </div>
      <div className={classes.second_section}>
        <h3>
          Don't miss out on your dream trip to Pakistan! Provide us with your
          information today, and one of our representatives will be in touch
          with personalized travel recommendations and itinerary planning to
          make your dream a reality.
        </h3>
      </div>
      <div className={classes.third_section}>
        <div
          style={{ backgroundColor: "transparent" }}
          className={classes.overlay}
        />
        <div className={classes.form_container}>
          <div className={classes.form_content}>
            <h2>Select the area</h2>
            <div className={classes.input_container}>
              <input
                type={"text"}
                placeholder={"Enter"}
                className={classes.input_field}
              />
              <Link href={"/contact_form"}>
                <img src={right_arrow.src} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.contact_info_section}>
        <h3>Discover our Homeland</h3>
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
    </div>
  );
}

export default Contact;
