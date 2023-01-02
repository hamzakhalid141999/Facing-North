import React from "react";
import classes from "./secondHomePageSection.module.css";
import second_section_bg from "../../../public/assets/homepage/second_section_bg.png";
import second_section_pic1 from "../../../public/assets/homepage/second_section_pic1.png";
import second_section_pic2 from "../../../public/assets/homepage/second_section_pic2.png";

function SecondHomePageSection() {
  return (
    <div className={classes.container}>
      <img src={second_section_bg.src} className={classes.bg} />
      <div className={classes.single_row}>
        <div className={classes.left_panel}>
          <h2>At home in History</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
            finibus urna. In ut justo quis metus rhoncus cursus quis vitae
            magna. Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
            ipsum. Aenean lacus augue, sollicitudin eu eros eleifend, luctus
            ultricies lectus. Nam elementum tempor arcu, ut faucibus ligula
            pharetra eu. Mauris tempus est est, non mattis massa accumsan eu.
            Fusce nisl mauris, sollicitudin quis ullamcorper et, mollis nec
            odio. Aenean feugiat est in vestibulum posuere. Sed commodo elit
            neque, sed rutrum risus semper in. Vestibulum eu lorem condimentum,
            semper neque fringilla, elementum velit. Donec tincidunt fringilla
            enim, et mollis turpis auctor nec. In molestie ornare vehicula. Sed
            id vehicula felis. Vestibulum pulvinar quam id dictum egestas.
          </p>
          <div className={classes.img_container_2}>
            <img className={classes.img2} src={second_section_pic2.src} />
          </div>
        </div>
        <div className={classes.right_panel}>
          <div className={classes.img_container}>
            <img className={classes.img1} src={second_section_pic1.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
