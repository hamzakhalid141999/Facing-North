import React, { useState, useEffect } from "react";
import classes from "./thirdHomePageSection.module.css";
import explore_pic_1 from "../../../public/assets/homepage/explore_pic_1.png";
import explore_pic_2 from "../../../public/assets/homepage/explore_pic_2.png";
import explore_pic_3 from "../../../public/assets/homepage/explore_pic_3.png";

import place_1 from "../../../public/assets/destination_detail_assets/card1.png";
import place_2 from "../../../public/assets/destination_detail_assets/card2.png";
import place_3 from "../../../public/assets/destination_detail_assets/card3.png";

import places1 from "../../../public/assets/homepage/places1.png";
import PlacesCards from "../components/placesCards";
import compass from "../../../public/assets/homepage/compass.svg";
import wind from "../../../public/assets/homepage/wind.svg";
import sun from "../../../public/assets/homepage/sun.svg";
import pin from "../../../public/assets/homepage/stroke_pin.svg";
import BestPlacesCards from "../components/bestPlacesCards";

import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import itinerary from "../../../public/assets/package_tour_assets/itinerary.png";
import bg from "../../../public/assets/package_tour_assets/pic.png";
import right_arrow_btn from "../../../public/assets/homepage/right-arrow.svg";
import { useAnimation, useAnimationFrame, motion } from "framer-motion";

function ThirdHomePageSection({ itineraryData }) {
  const [location, setLocation] = useState(1);
  const [dayInfo, setDayInfo] = useState();
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedDayInfo, setSelectedDayInfo] = useState();
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const imageAnimation = useAnimation();
  const paraAnimation = useAnimation();
  const dayAnimation = useAnimation();

  console.log("LENGTH: ", dayInfo?.length, "SELECTED: ", selectedDay);

  useEffect(() => {
    if (itineraryData) {
      setDayInfo(itineraryData?.itinerary);
    }
  }, [itineraryData]);

  useEffect(() => {
    if (dayInfo && typeof selectedDay === "number") {
      setSelectedDayInfo(dayInfo[selectedDay]);
    }
  }, [dayInfo, selectedDay]);

  console.log(selectedDay);

  const handleTrigglePictureAnimation = async () => {
    console.log("adsasdasasdas");
    imageAnimation.start({
      x: "6vw",
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });
    await delay(250);

    imageAnimation.start({
      x: "-6vw",
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });

    if (selectedDay === dayInfo?.length - 1) {
      setSelectedDay(0);
      console.log("IN SELECTED CONDITION");
    } else {
      setSelectedDay(selectedDay + 1);
    }
    await delay(250);

    imageAnimation.start({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });
  };

  const handleToggleHeadingAnimation = async () => {
    paraAnimation.start({
      y: "10vh",
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });

    paraAnimation.start({
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });

    await delay(500);
    paraAnimation.start({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });

    paraAnimation.start({
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });
  };

  const handleToggleDaysAnimation = async () => {
    dayAnimation.start({
      x: "-4vw",
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });

    dayAnimation.start({
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });

    await delay(500);
    dayAnimation.start({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });

    dayAnimation.start({
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    });
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
      breakpoint: { max: 1220, min: 464 },
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
      <div className={classes.itinerary_section}>
        <div className={classes.itinerary_heading_container}>
          <div className={classes.heading_container}>
            <p>Itinerary Section</p>
          </div>
          <div className={classes.duration_container}>
            <p>9 DAYS 8 NIGHTS</p>
          </div>
        </div>

        <div animate={paraAnimation} className={classes.content_container}>
          <motion.div animate={dayAnimation} className={classes.day_heading}>
            DAY 0{selectedDay + 1}
          </motion.div>
          <motion.div animate={paraAnimation} className={classes.city}>
            {selectedDayInfo?.title}
          </motion.div>
          <motion.div
            animate={paraAnimation}
            className={classes.city_description}
          >
            {selectedDayInfo?.description}
          </motion.div>
        </div>
        <motion.div animate={imageAnimation} className={classes.pic_container}>
          <img src={bg.src} className={classes.img} />
          <div
            onClick={async () => {
              handleTrigglePictureAnimation();
              await delay(100);
              handleToggleHeadingAnimation();
              await delay(100);
              handleToggleDaysAnimation();
            }}
            className={classes.next_day_container}
          >
            <img src={right_arrow_btn.src} />
            <p>DAY 0{selectedDay + 1}</p>
          </div>
        </motion.div>
      </div>

      <div className={classes.whats_included_section}>
        <h2 className={classes.title}>What's Included</h2>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus. Nam elementum tempor arcu, ut faucibus ligula pharetra eu.
        </p>
      </div>

      <div className={classes.places_to_stay_container}>
        <h2 className={classes.title}>Best Places to Stay</h2>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus. Nam elementum tempor arcu, ut faucibus ligula pharetra eu.
        </p>
        <div className={classes.best_cards_container}>
          <BestPlacesCards pic={place_1} />
          <BestPlacesCards pic={place_2} />
          <BestPlacesCards pic={place_3} />
        </div>
      </div>
    </div>
  );
}

export default ThirdHomePageSection;
