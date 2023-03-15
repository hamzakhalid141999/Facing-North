import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import arrow from "../../public/assets/testimonial_card_assets/left_arrow.png";
import bg from "../../public/assets/testimonial_card_assets/bg.png";

function prev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: "-20%",
        bottom: "0%",
        display: "block",
        zIndex: "+10",
      }}
    >
      <div className={classes.arrow_container}>
        <div className={classes.overlay} />
        <Image
          src={arrow}
          height={"25"}
          width={"50"}
          style={{ cursor: "pointer", zIndex: "100000" }}
        />
      </div>
    </div>
  );
}

export default prev;
