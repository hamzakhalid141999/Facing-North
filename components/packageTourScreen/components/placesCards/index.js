import React from "react";
import classes from "./placesCards.module.css";
import compass from "../../../../public/assets/homepage/compass.svg";
import wind from "../../../../public/assets/homepage/wind.svg";
import sun from "../../../../public/assets/homepage/sun.svg";
import location from "../../../../public/assets/homepage/stroke_pin.svg";
import Link from "next/link";

function PlacesCards({ itineraryDetails, pic }) {
  return (
    <Link href={"/package_tour/" + itineraryDetails?.id}>
      <div className={classes.card_body}>
        <div className={classes.overlay} />
        <div className={classes.info_container}>
          <p className={classes.city_name}>{itineraryDetails?.title}</p>
          <p className={classes.province_name}>
            {itineraryDetails.product_code}
          </p>
        </div>
        <div className={classes.info_section}></div>
        <img className={classes.bg_img} src={pic.src} />
      </div>
    </Link>
  );
}

export default PlacesCards;
