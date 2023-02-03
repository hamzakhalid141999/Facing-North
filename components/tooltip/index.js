import React from "react";
import classes from "./tooltip.module.css";
import logo from "../../public/assets/toolbar/logo_white.svg";
import consultant from "../../public/assets/toolbar/consultant.svg";
import expert from "../../public/assets/toolbar/expert.svg";

function Tooltip() {
  return (
    <div className={classes.tooltip_container}>
      <div className={classes.tooltip_body}>
        <img src={logo.src} />
      </div>
      <div className={classes.single_icon_container}>
        <img src={consultant.src} />
        <p>
          GROUP <br />
          TOURS
        </p>
      </div>
      <div className={classes.single_icon_container}>
        <img src={expert.src} />
        <p>EXPERIENCES</p>
      </div>
      <div className={classes.single_icon_container}>
        <img src={consultant.src} />
        <p>
          GROUP <br />
          TOURS
        </p>
      </div>
    </div>
  );
}

export default Tooltip;
