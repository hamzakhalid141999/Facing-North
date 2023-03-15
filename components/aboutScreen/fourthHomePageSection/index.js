import React from "react";
import classes from "./fourthHomePageSection.module.css";
import mission_bg from "../../../public/assets/about-page-assets/mission_bg.png";
import story_bg from "../../../public/assets/about-page-assets/story_bg.png";
import vision_bg from "../../../public/assets/about-page-assets/vision_bg.png";
import Link from "next/link";

function FourthHomePageSection() {
  return (
    <div className={classes.container}>
      <div className={classes.second_section}>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus.{" "}
        </h3>
      </div>
      <div className={classes.feedback_section}>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img src={story_bg.src} className={classes.img} />
            <div className={classes.review_container_centered}>
              <h3>Our Story</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                finibus urna. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras et finibus urna. In ut justo quis metus
                rhoncus cursus quis vitae magna. Ut nibh metus, accumsan viverra
                massa ac, sagittis pulvinar ipsum. In ut justo quis metus
                rhoncus cursus quis vitae magna. Ut nibh metus, accumsan viverra
                massa ac, sagittis pulvinar ipsum.
              </p>
              <p>
                Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
                ipsum. In ut justo quis metus rhoncus cursus quis vitae magna.
                Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
                ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.feedback_section}>
        <div className={classes.img_container_right}>
          <div className={classes.img_wrapper_right}>
            <img src={mission_bg.src} className={classes.img} />
            <div className={classes.review_container_right}>
              <h3>Our Mission</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                finibus urna. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum. Ut nibh metus, accumsan viverra massa ac,
                sagittis pulvinar ipsum. In ut justo quis metus rhoncus cursus
                quis vitae magna. Ut nibh metus, accumsan viverra massa ac,
                sagittis pulvinar ipsum.
              </p>
              <p>
                {" "}
                Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
                ipsum. In ut justo quis metus rhoncus cursus quis vitae magna.
                Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
                ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.feedback_section}>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img src={vision_bg.src} className={classes.img} />
            <div className={classes.review_container}>
              <h3>Our Vision</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                finibus urna. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum. Ut nibh metus, accumsan viverra massa ac,
                sagittis pulvinar ipsum. In ut justo quis metus rhoncus cursus
                quis vitae magna. Ut nibh metus, accumsan viverra massa ac,
                sagittis pulvinar ipsum.
              </p>
              <p>
                {" "}
                Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
                ipsum. In ut justo quis metus rhoncus cursus quis vitae magna.
                Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
                ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthHomePageSection;
