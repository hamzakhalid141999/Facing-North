import React from "react";
import BlogsContainer from "../../components/blogsScreen/blogsContainer";
import HeroBanner from "../../components/blogsScreen/heroBanner";
import DestinationCard from "../../components/destinationsScreen/components/destinationCard";
import classes from "./destinations.module.css";
import bg from "../../public/assets/blog_card_assets/bg.png";
import { DESTIATIONS } from "../../data/destinations";

function Destinations() {
  console.log(DESTIATIONS);

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        {" "}
        <div className={classes.cards_container}>
          {DESTIATIONS?.map((destination, index) => (
            <DestinationCard key={index} title={destination?.title} pic={bg} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
