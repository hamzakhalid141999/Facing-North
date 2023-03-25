import React from "react";
import classes from "./secondHomePageSection.module.css";
import explore_pic_2 from "../../../public/assets/homepage/explore_pic_2.png";
import Image from "next/image";

function SecondHomePageSection({ title, detail }) {
  return (
    <div className={classes.container}>
      <div className={classes.img_container}>
        <Image src={explore_pic_2} className={classes.img} />
      </div>
      <div className={classes.content_container}>
        <p className={classes.title}>{title}</p>
        {detail?.map((detail, index) => (
          <p key={index} className={classes.description}>
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SecondHomePageSection;
