import React, { useEffect } from "react";
import classes from "./fourthHomePageSection.module.css";
import mission_bg from "../../../public/assets/about-page-assets/mission_bg.png";
import story_bg from "../../../public/assets/about-page-assets/story_bg.png";
import vision_bg from "../../../public/assets/about-page-assets/vision_bg.png";
import AOS from "aos";
import "aos/dist/aos.css";

function FourthHomePageSection({
  introRef,
  storyRef,
  missionRef,
  visionRef,
  info,
}) {

  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: 'ease-out', // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  
  return (
    <div className={classes.container}>
      <div ref={introRef} className={classes.second_section}>
        <h3>{info.statement}</h3>
      </div>
      <div ref={storyRef} className={classes.feedback_section}>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img data-aos="fade-right" src={story_bg.src} className={classes.img} />
            <div data-aos="fade-left" className={classes.review_container_centered}>
              <h3>Our Story</h3>

              <p>{info.story}</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={missionRef} className={classes.feedback_section}>
        <div className={classes.img_container_right}>
          <div className={classes.img_wrapper_right}>
            <img data-aos="fade-left" src={mission_bg.src} className={classes.img} />
            <div data-aos="fade-right" className={classes.review_container_right}>
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
             data-aos="fade-right"
              style={{ marginBottom: "-3px" }}
              src={vision_bg.src}
              className={classes.img}
            />
            <div  data-aos="fade-left" className={classes.review_container_centered}>
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
