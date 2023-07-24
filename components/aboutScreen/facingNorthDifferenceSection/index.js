import React, { useState, useEffect } from "react";
import classes from "./facingNorthDifference.module.css";
import explore_pic_1 from "../../../public/assets/homepage/explore_pic_1.png";
import explore_pic_2 from "../../../public/assets/homepage/explore_pic_2.png";
import explore_pic_3 from "../../../public/assets/homepage/explore_pic_3.png";

import PlacesCards from "../components/placesCards";

import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

function FacingNorthDifference({ info }) {
  const [location, setLocation] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  console.log("ARR: ", info);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1220 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1220, min: 830 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsiveBestPlaceCards = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1220 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1220, min: 830 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <img
        src={right_arrow.src}
        style={{ width: "60px", height: "60px", position: "absolute" }}
        className={"react-multiple-carousel__arrow--right"}
        onClick={() => onClick()}
      />
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <img
        className={"react-multiple-carousel__arrow--left"}
        src={left_arrow.src}
        style={{ width: "60px", height: "60px", position: "absolute" }}
        onClick={() => onClick()}
      />
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.sliding_cards_container}>
        <h2 className={classes.title}>The Facing North Difference</h2>

        <div className="cards_container">
          <Carousel
            infinite={true}
            autoPlay={true}
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
          >
            {info?.map((info, index) => (
              <div data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <PlacesCards
                  title={info.title}
                  description={info.description}
                  pic={info.img}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default FacingNorthDifference;
