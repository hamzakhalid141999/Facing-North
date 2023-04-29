import React, { useState, useEffect, useRef } from "react";
import classes from "./tooltip.module.css";
import logo from "../../public/assets/toolbar/logo_white.svg";
import consultant from "../../public/assets/toolbar/consultant.svg";
import expert from "../../public/assets/toolbar/expert.svg";

function Tooltip() {
  const [height, setHeight] = useState("82px");
  const tooltipRef = useRef(null);

  const handleMouseEnter = () => {
    const tooltipBody = tooltipRef.current.querySelector(
      `.${classes.icons_body}`
    );
    const height = tooltipBody.getBoundingClientRect().height + 20; // add 20 for padding
    setHeight(`${height}px`);
    console.log(height);
  };

  const handleMouseLeave = () => {
    setHeight("82px");
  };

  return (
    <div
      className={classes.tooltip_container}
      style={{ height: height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={tooltipRef}
    >
      <div className={classes.tooltip_body}>
        <img src={logo.src} />
      </div>
      <div className={classes.icons_body}>
        <div className={classes.single_icon_container}>
          <img src={consultant.src} />
          <p>Heading 1</p>
        </div>
        <div className={classes.single_icon_container}>
          <img src={consultant.src} />
          <p>Heading 2</p>
        </div>
        <div className={classes.single_icon_container}>
          <img src={consultant.src} />
          <p>Heading 3</p>
        </div>
        <div className={classes.single_icon_container}>
          <img src={consultant.src} />
          <p>Heading 3</p>
        </div>
        <div className={classes.single_icon_container}>
          <img src={consultant.src} />
          <p>Heading 3</p>
        </div>
        <div className={classes.single_icon_container}>
          <img src={consultant.src} />
          <p>Heading 3</p>
        </div>
        <div className={classes.single_icon_container}>
          <img src={consultant.src} />
          <p>Heading 3</p>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
