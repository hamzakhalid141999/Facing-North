import React, { useState, useEffect } from "react";
import BlogsContainer from "../../components/blogsScreen/blogsContainer";
import HeroBanner from "../../components/blogsScreen/heroBanner";
import DestinationCard from "../../components/destinationsScreen/components/destinationCard";
import classes from "./destinations.module.css";
import bg from "../../public/assets/blog_card_assets/bg.png";
import { DESTIATIONS } from "../../data/destinations";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function Destinations() {
  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        {" "}
        <div className={classes.cards_container}>
          {DESTIATIONS?.map((destination, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <DestinationCard
                id={destination?.id}
                title={destination?.title}
                location={destination?.location}
                img={destination?.img}
                pic={bg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
