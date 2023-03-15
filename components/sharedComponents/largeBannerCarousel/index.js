import React from "react";
import classes from "./largeBannerCarousel.module.css";
import girl_pic from "../../../public/assets/destination_detail_assets/girl_placeholder.png";
import boy_pic from "../../../public/assets/destination_detail_assets/boy_placeholder.png";
import blog_bg from "../../../public/assets/destination_detail_assets/blog_bg.svg";
import star_filled from "../../../public/assets/destination_detail_assets/star_filled.svg";
import second_section_bg from "../../../public/assets/homepage/second_section_bg.png";
import third_section_img from "../../../public/assets/services_details_assets/third_section_img.png";
import img1 from "../../../public/assets/services_details_assets/img1.png";
import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function LargeBannerCarousel({ isWhite }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1220 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1220, min: 464 },
      items: 1,
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
    <>
      <div className={isWhite ? "second_container_white" : "second_container"}>
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
          <img src={img1.src} className={classes.carousel_img} />
          <img src={img1.src} className={classes.carousel_img} />
          <img src={img1.src} className={classes.carousel_img} />
          <img src={img1.src} className={classes.carousel_img} />
          <img src={img1.src} className={classes.carousel_img} />
          <img src={img1.src} className={classes.carousel_img} />
          <img src={img1.src} className={classes.carousel_img} />
          <img src={img1.src} className={classes.carousel_img} />
        </Carousel>
      </div>
    </>
  );
}

export default LargeBannerCarousel;
