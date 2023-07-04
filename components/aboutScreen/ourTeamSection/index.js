import React, { useEffect, useState } from "react";
import classes from "./ourTeamSection.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TeamCard from "./components/teamCard";
import Next from "../../../components/reactSlickButtons/next";
import Prev from "../../../components/reactSlickButtons/prev";
import { team } from "../../../data/team";

function OurTeamSection() {
  const [ourTeam, setOurTeam] = useState([]);

  useEffect(() => {
    if (team?.length > 0) {
      setOurTeam(team);
    }
  }, [team]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1341,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className={classes.container}>
      <p className={classes.title}>Our Team</p>
      <div className="our_team_slider">
        <Slider arrows={true} {...settings}>
          {ourTeam?.map((member, index) => (
            <TeamCard key={index} member={member}/>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default OurTeamSection;
