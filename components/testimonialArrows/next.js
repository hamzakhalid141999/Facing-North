import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import arrow from "../../public/assets/testimonial_card_assets/right_arrow.png";
import { useWindowSize } from "../../utils";
import mobile_arrow from "../../public/assets/services_details_assets/right_arrow.svg";

function next(props) {
  const { className, style, onClick } = props;
  const { width } = useWindowSize();

  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: width < 700 ? "30%" : "-20%",
        bottom: width < 700 ? "-15%" : "0",
        display: "block",
      }}
    >
      {width > 700 ? (
        <div className={classes.arrow_container}>
          <div className={classes.overlay} />
          <Image
            src={arrow}
            height={"17"}
            width={"42"}
            style={{ cursor: "pointer", zIndex: "100000" }}
          />
        </div>
      ) : (
        <Image
          src={mobile_arrow}
          height={"17"}
          width={"42"}
          style={{ cursor: "pointer", zIndex: "100000" }}
        />
      )}
    </div>
  );
}

export default next;
