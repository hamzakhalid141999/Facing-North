import React from "react";
import classes from "./fourthHomePageSection.module.css";
import service_1 from "../../../public/assets/services_assets/service_1.png";
import service_2 from "../../../public/assets/services_assets/service_2.png";
import service_3 from "../../../public/assets/services_assets/service_3.png";
import Link from "next/link";

function FourthHomePageSection() {
  return (
    <div className={classes.container}>
      <div className={classes.feedback_section}>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img src={service_1.src} className={classes.img} />
            <div className={classes.review_container}>
              <h3>Camping</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                finibus urna. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum.{" "}
              </p>
              <Link href="/services_details">
                <div className={classes.btn}>
                  <p>EXPLORE</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.feedback_section}>
        <div className={classes.img_container_right}>
          <div className={classes.img_wrapper}>
            <img src={service_2.src} className={classes.img} />
            <div className={classes.review_container_right}>
              <h3>Hiking</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                finibus urna. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum.{" "}
              </p>
              <Link href="/services_details">
                <div className={classes.btn}>
                  <p>EXPLORE</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.feedback_section}>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img src={service_3.src} className={classes.img} />
            <div className={classes.review_container}>
              <h3>Outdoor Pursuits</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                finibus urna. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum.{" "}
              </p>
              <Link href="/services_details">
                <div className={classes.btn}>
                  <p>EXPLORE</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthHomePageSection;
