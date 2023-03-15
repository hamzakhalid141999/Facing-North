import React from "react";
import classes from "./teamCard.module.css";
import team from "../../../../../public/assets/about-page-assets/team.png";

function TeamCard() {
  return (
    <div className={classes.card_body}>
      <div className={classes.img_container}>
        <img src={team.src} />
      </div>
      <div className={classes.content_container}>
        <h2>Hussain Mustansir</h2>
        <p className={classes.founder_text}>Founder</p>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
        </p>
      </div>
    </div>
  );
}

export default TeamCard;
