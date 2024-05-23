import React, { useState, useEffect } from "react";
import classes from "./thirdHomePageSection.module.css";
import place_1 from "../../../public/assets/destination_detail_assets/card1.png";
import place_2 from "../../../public/assets/destination_detail_assets/card2.png";
import place_3 from "../../../public/assets/destination_detail_assets/card3.png";
import BestPlacesCards from "../components/bestPlacesCards";

import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";

import "react-multi-carousel/lib/styles.css";

import { useRouter } from "next/router";

function TopDestinations({ places, data }) {
  const router = useRouter();
  const [location, setLocation] = useState(1);
  const [isPilgrim, setIsPilgrim] = useState(false);
  const [isCulinary, setIsCulinary] = useState(false);

  useEffect(() => {
    if (router.query.id) {
      console.log(router.query.id);
      if (router.query.id.includes("Pilgrims")) {
        setIsPilgrim(true);
      } else if (router.query.id.includes("Culinary")) {
        setIsCulinary(true);
      }
    }
  }, [router.query.id]);

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
      <div className={classes.places_to_stay_container}>
        <h2 className={classes.title}>
          {data?.dest_heading}
        </h2>
        <p className={classes.description}>
          {data?.dest_para}
        </p>
        <div className={classes.best_cards_container}>
          {places?.map((place, index) => (
            <BestPlacesCards
              description={place?.description}
              title={place?.title}
              pic={place_1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopDestinations;
