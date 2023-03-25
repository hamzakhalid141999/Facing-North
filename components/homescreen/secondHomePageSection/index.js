import React from "react";
import classes from "./secondHomePageSection.module.css";
import second_section_bg from "../../../public/assets/homepage/second_section_bg.png";
import second_section_pic1 from "../../../public/assets/homepage/second_section_pic1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";
import { HOMEPAGE_FIRST_SLIDER } from "../../../data/homepage";

function SecondHomePageSection() {
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
              <div key={index} className={classes.single_row}>
                <div className={classes.left_panel}>
                  <h2>{slide.title}</h2>
                  <p>{slide.detailed_description}</p>
                </div>
                <div className={classes.right_panel}>
                  <div className={classes.img_container}>
                    <img
                      className={classes.img1}
                      src={second_section_pic1.src}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
