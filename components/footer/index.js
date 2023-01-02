import React from "react";
import classes from "./footer.module.css";
import logo from "../../public/assets/footer-assets/logo.svg";
import logo_text from "../../public/assets/footer-assets/logo-text.svg";
import facebook from "../../public/assets/footer-assets/facebook.svg";
import youtube from "../../public/assets/footer-assets/youtube.svg";
import linkedin from "../../public/assets/footer-assets/linkedin.svg";
import instagram from "../../public/assets/footer-assets/instagram.svg";

function Footer() {
  return (
    <div className={classes.footer_body}>
      <div className={classes.footer_content}>
        <div className={classes.col_1}>
          <div className={classes.logo_container}>
            <img src={logo.src} className={classes.logo} alt="logo" />
            <img src={logo_text.src} className={classes.logo_text} alt="logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
            finibus urna. In ut justo quis metus rhoncus cursus quis vitae
            magna. Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
            ipsum.
          </p>
          <p className={classes.copyright_text}>
            FACING NORTH . 2022 . ALL RIGHTS RESERVED
          </p>
        </div>

        <div className={classes.col_2}>
          <h1>Links</h1>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Useful Info</p>
        </div>

        <div className={classes.col_2}>
          <h1>Get in Touch</h1>
          <p>info@abcd@gmail.com</p>
          <p>+92 333 4444</p>
          <div className={classes.social_logos_container}>
            <img
              src={facebook.src}
              className={classes.social_media_logo}
              alt="logo"
            />
            <img
              src={instagram.src}
              className={classes.social_media_logo}
              alt="logo"
            />
            <img
              src={linkedin.src}
              className={classes.social_media_logo}
              alt="logo"
            />
            <img
              src={youtube.src}
              className={classes.social_media_logo}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
