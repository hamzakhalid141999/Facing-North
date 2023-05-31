import React from "react";
import classes from "./secondHomePageSection.module.css";
import second_section_bg from "../../../public/assets/homepage/second_section_bg.png";
import second_section_pic1 from "../../../public/assets/homepage/second_section_pic1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";
import { HOMEPAGE_FIRST_SLIDER } from "../../../data/homepage";
import { motion } from "framer-motion";

function SecondHomePageSection() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  

  return (
    <div className={classes.container}>
      <div className={classes.inner_container}>
        <img src={second_section_bg.src} className={classes.bg} />

        <div className={classes.carousel_container}>
          <Carousel
            renderArrowNext={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <img
                  src={left_arrow.src}
                  style={{
                    width: "60px",
                    height: "60px",
                    position: "absolute",
                    zIndex: "1000000",
                  }}
                  className={"react-multiple-carousel__arrow--left"}
                  onClick={() => {
                    onClickHandler();
                  }}
                />
              )
            }
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <img
                  src={right_arrow.src}
                  style={{
                    width: "60px",
                    height: "60px",
                    position: "absolute",
                    zIndex: "1000000",
                  }}
                  className={"react-multiple-carousel__arrow--right"}
                  onClick={onClickHandler}
                />
              )
            }
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
          >
            {HOMEPAGE_FIRST_SLIDER?.map((slide, index) => (
              <motion.ul
                variants={container}
                initial="hidden"
                animate="visible"
                key={index}
                className={classes.single_row}
              >
                <motion.ul
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  className={classes.left_panel}
                >
                  <motion.li
                    variants={item}
                    className={classes.left_panel_heading}
                  >
                    {slide.title}
                  </motion.li>
                  <motion.li
                    variants={item}
                    className={classes.left_panel_subheading}
                  >
                    {slide.detailed_description}
                  </motion.li>
                </motion.ul>
                <motion.li variants={item} className={classes.right_panel}>
                  <div className={classes.img_container}>
                    <img
                      className={classes.img1}
                      src={second_section_pic1.src}
                    />
                  </div>
                </motion.li>
              </motion.ul>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
