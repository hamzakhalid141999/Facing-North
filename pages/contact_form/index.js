import React from "react";
import classes from "./contact.module.css";
import right_arrow from "../../public/assets/contact_us_assets/right_arrow.svg";
import email from "../../public/assets/contact_us_assets/email.svg";
import phone from "../../public/assets/contact_us_assets/phone.svg";

function Contact() {
  return (
    <div className={classes.container}>
      <div className={classes.hero_banner_container}>
        <div className={classes.overlay} />
        <h2>Find your own World</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl
          libero, ornare non libero vitae, vestibulum egestas tellus. Curabitur
          sodales eleifend sem laoreet varius.{" "}
        </p>
      </div>
      <div className={classes.second_section}>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus.{" "}
        </h3>
      </div>
      <div className={classes.third_section}>
        <div
          style={{ backgroundColor: "transparent" }}
          className={classes.overlay}
        />
        <div className={classes.form_container}>
          <div className={classes.form_content}>
            <div className={classes.left_panel}>
              <h2 className={classes.heading}>Hunza</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                finibus urna.{" "}
              </p>
              <p>+92 331 09123123</p>
              <p>info@abc.com</p>
            </div>
            <div className={classes.right_panel}>
              <h2 className={classes.heading}>Inquiry Form</h2>

              <div className="input_row_single">
                <input placeholder="Your name" className="input_field" />
                <input placeholder="Your email" className="input_field" />
              </div>

              <div className="input_row_single">
                <input placeholder="Enter phone" className="input_field" />
                <input placeholder="Enter Your City" className="input_field" />
              </div>

              <div className="input_row_single">
                <input placeholder="Number of People" className="input_field" />
                <input placeholder="Number of Days" className="input_field" />
              </div>

              <div className="input_row_single">
                <input
                  placeholder="Preference of Travel"
                  className="input_field"
                />
              </div>

              <div className="input_row_single">
                <textarea
                  placeholder="Type your message"
                  className="input_field"
                />
              </div>

              <div className={classes.btn}>
                <p>SUBMIT</p>
              </div>
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
