import Link from "next/link";
import React from "react";
import classes from "./destinationCard.module.css";

function DestinationCard({ title, pic }) {
  return (
    <Link href="/destination_detail" passHref>
      <div className={classes.card_body}>
        <div className={classes.img_container}>
          <img src={pic.src} className={classes.img} />
        </div>
        <div className={classes.description_container}>
          <div className={classes.description_container_inner}>
            <h2>{title}</h2>
            <h3>November 5, 2021</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;
