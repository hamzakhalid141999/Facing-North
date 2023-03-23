import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import arrow from "../../public/assets/testimonial_card_assets/right_arrow.png";

function next(props) {
  const { className, style, onClick } = props;

  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: "-20%",
        bottom: "0%",
        display: "block",
      }}
    >
      <div className={classes.arrow_container}>
        <div className={classes.overlay} />
        <Image
          src={arrow}
          height={"17"}
          width={"42"}
          style={{ cursor: "pointer", zIndex: "100000" }}
        />
      </div>
    </div>
  );
}

export default next;
