import React from "react";
import classes from "./fourthHomePageSection.module.css";
import mission_bg from "../../../public/assets/about-page-assets/mission_bg.png";
import story_bg from "../../../public/assets/about-page-assets/story_bg.png";
import vision_bg from "../../../public/assets/about-page-assets/vision_bg.png";
import Link from "next/link";

function FourthHomePageSection({
  introRef,
  storyRef,
  missionRef,
  visionRef,
  info,
}) {
  return (
    <div className={classes.container}>
      <div ref={introRef} className={classes.second_section}>
        <h3>{info.statement}</h3>
      </div>
      <div ref={storyRef} className={classes.feedback_section}>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img src={story_bg.src} className={classes.img} />
            <div className={classes.review_container_centered}>
              <h3>Our Story</h3>

              <p>{info.story}</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={missionRef} className={classes.feedback_section}>
        <div className={classes.img_container_right}>
          <div className={classes.img_wrapper_right}>
            <img src={mission_bg.src} className={classes.img} />
            <div className={classes.review_container_right}>
              <h3>Our Mission</h3>

              <p>{info.mission}</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={visionRef} className={classes.feedback_section}>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img
              style={{ marginBottom: "-3px" }}
              src={vision_bg.src}
              className={classes.img}
            />
            <div className={classes.review_container}>
              <h3>Our Vision</h3>

              <p>{info.vision}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthHomePageSection;
