import React from "react";
import classes from "./placesCards.module.css";

function BestPlacesCards({ isNotHoverable, isLeftAligned, pic }) {
  return (
    <div
      style={{ borderBottom: isLeftAligned && "none" }}
      className={
        isNotHoverable ? classes.card_body_non_hover : classes.card_body
      }
    >
      <div className={classes.img_container}>
        <img src={pic.src} className={classes.img} />
      </div>
      <div className={classes.description_container}>
        <div
          style={{ alignItems: isLeftAligned && "flex-start" }}
          className={classes.description_container_inner}
        >
          <h2 style={{ textAlign: isLeftAligned && "left" }}>Altit Fort</h2>
          <h3 style={{ textAlign: isLeftAligned && "left" }}>
            Gilgit, Baltistan
          </h3>
          <p style={{ textAlign: isLeftAligned && "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
            finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna
          </p>
        </div>
      </div>
    </div>
  );
}

export default BestPlacesCards;
