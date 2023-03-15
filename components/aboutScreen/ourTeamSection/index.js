import React from "react";
import classes from "./ourTeamSection.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TeamCard from "./components/teamCard";
import Next from "../../../components/reactSlickButtons/next";
import Prev from "../../../components/reactSlickButtons/prev";

function OurTeamSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  return (
    <div className={classes.container}>
      <p className={classes.title}>Our Team</p>
      <div className={classes.card_section}>
        <Slider arrows={true} {...settings}>
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </Slider>
      </div>
    </div>
  );
}

export default OurTeamSection;
