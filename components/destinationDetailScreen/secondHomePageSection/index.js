import React from "react";
import classes from "./secondHomePageSection.module.css";
import explore_pic_2 from "../../../public/assets/homepage/explore_pic_2.png";
import Image from "next/image";

function SecondHomePageSection() {
  return (
    <div className={classes.container}>
      <div className={classes.img_container}>
        <Image src={explore_pic_2} className={classes.img} />
      </div>
      <div className={classes.content_container}>
        <p className={classes.title}>Hunza</p>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus. Nam elementum tempor arcu, ut faucibus ligula pharetra eu.
          Mauris tempus est est, non mattis massa accumsan eu. Fusce nisl
          mauris, sollicitudin quis ullamcorper et, mollis nec odio. Aenean
          feugiat est in vestibulum posuere. Sed commodo elit neque, sed rutrum
          risus semper in. Vestibulum eu lorem condimentum, semper neque
          fringilla, elementum velit.
        </p>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
