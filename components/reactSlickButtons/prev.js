import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import arrow from "../../public/assets/services_details_assets/left_arrow.svg";

function prev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: "42%",
        bottom: "-20%",
        display: "block",
        zIndex: "+10",
      }}
    >
      <Image
        src={arrow}
        height={"50"}
        width={"50"}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default prev;
