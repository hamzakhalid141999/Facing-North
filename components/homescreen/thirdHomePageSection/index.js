import React, { useState, useEffect } from "react";
import classes from "./thirdHomePageSection.module.css";
import explore_pic_1 from "../../../public/assets/homepage/explore_pic_1.png";
import explore_pic_2 from "../../../public/assets/homepage/explore_pic_2.png";
import explore_pic_3 from "../../../public/assets/homepage/explore_pic_3.png";
import globe from "../../../public/assets/homepage/globe.png";
import places1 from "../../../public/assets/homepage/places1.png";
import PlacesCards from "../components/placesCards";
import compass from "../../../public/assets/homepage/compass.svg";
import wind from "../../../public/assets/homepage/wind.svg";
import sun from "../../../public/assets/homepage/sun.svg";
import pin from "../../../public/assets/homepage/stroke_pin.svg";
import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ThirdHomePageSection() {
  const [location, setLocation] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

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

  const responsive_location_carousel = {
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

  const CustomRightArrowLocation = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <div
        style={{
          width: "60px",
          height: "60px",
          position: "absolute",
          left: "13%",
          top: "22px",
        }}
        // className={classes}
      >
        <img
          src={right_arrow.src}
          style={{ position: "absolute" }}
          className={"react-multiple-carousel__arrow--right"}
          onClick={() => {
            console.log("right arrow clicked");
            onClick();
          }}
        />
      </div>
    );
  };

  const CustomLeftArrowLocation = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <div
        style={{
          width: "60px",
          height: "60px",
          left: "0px",
          top: "22px",
          position: "absolute",
        }}
      >
        <img
          className={"react-multiple-carousel__arrow--left"}
          src={left_arrow.src}
          style={{ position: "absolute" }}
          onClick={() => {
            console.log("left arrow clicked");
            onClick();
          }}
        />
      </div>
    );
  };

  const placesData = [
    explore_pic_3,
    explore_pic_2,
    explore_pic_1,
    explore_pic_3,
    explore_pic_2,
    explore_pic_1,
  ];

  return (
    <div className={classes.container}>
      <img data-aos="fade-right" src={globe.src} className={classes.globe} />
      <div data-aos="fade-left" className={classes.location_container}>
        <div className={classes.content_container}>
          <div className="homepage_location_pic_container">
            <Carousel
              infinite={true}
              autoPlay={false}
              responsive={responsive_location_carousel}
              swipeable={true}
              draggable={true}
              showDots={false}
              customRightArrow={<CustomRightArrowLocation />}
              customLeftArrow={<CustomLeftArrowLocation />}
            >
              <img src={places1.src} />
              <img src={places1.src} />
              <img src={places1.src} />
              <img src={places1.src} />
            </Carousel>
          </div>
          <div className={classes.info_container}>
            <div className={classes.indicators}>
              <div className={classes.single_indicator}>
                <img className={classes.indicator_img} src={compass.src} />
                <p>NNW</p>
              </div>
              <div className={classes.single_indicator}>
                <img className={classes.indicator_img} src={wind.src} />
                <p>3 mgh</p>
              </div>
              <div className={classes.single_indicator}>
                <img className={classes.indicator_img} src={sun.src} />
                <p>28 deg</p>
              </div>
            </div>
            <p className={classes.place_area_name}>Kashmir</p>
            <div className={classes.location_container_row}>
              <img src={pin.src} className={classes.pin} />
              <p className={classes.place_name}>Neelum Valley</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.title_section}>
        <h2 data-aos="fade-down" className={classes.title}>
          Explore <br />
          our Worlds
        </h2>
        <p data-aos="fade-down" className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus.
        </p>
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
            {placesData.map((pic, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <PlacesCards pic={pic} />
              </div>
            ))}
          </Carousel>
        </div>

        <h2 data-aos="fade-right" className={classes.title}>
          Lands of <br />
          Discovery
        </h2>
        <p data-aos="fade-right" className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus.
        </p>
        <div className={classes.row}>
          <p
            onClick={() => {
              setLocation(1);
            }}
            style={{ borderBottom: location === 1 && "2px solid black" }}
          >
            Gilgit
          </p>
          <p
            onClick={() => {
              setLocation(2);
            }}
            style={{ borderBottom: location === 2 && "2px solid black" }}
          >
            Kashmir
          </p>
          <p
            onClick={() => {
              setLocation(3);
            }}
            style={{ borderBottom: location === 3 && "2px solid black" }}
          >
            Swat
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdHomePageSection;
