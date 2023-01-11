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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ThirdHomePageSection() {
  const [location, setLocation] = useState(1);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={classes.container}>
      <div className={classes.title_section}>
        <h2 className={classes.title}>Tours Featuring Destination</h2>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus.
        </p>
        <div className={classes.cards_container}>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
          >
            <PlacesCards pic={explore_pic_3} />
            <PlacesCards pic={explore_pic_2} />
            <PlacesCards pic={explore_pic_1} />
            <PlacesCards pic={explore_pic_3} />
            <PlacesCards pic={explore_pic_2} />
            <PlacesCards pic={explore_pic_1} />
          </Carousel>
        </div>
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
