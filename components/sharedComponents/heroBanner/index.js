import React from "react";
import classes from "./heroBanner.module.css";
import { motion } from "framer-motion";

function HeroBanner({
  heading,
  heading2,
  subheading1,
  subheading2,
  backgroundImg,
}) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  console.log(`url("${backgroundImg}")`);

  const divStyle = {
    backgroundImage: `url("${backgroundImg}")`,
    /* You can add more background properties here */
  };

  console.log(`url("${backgroundImg}")`);
  return (
    <div
      style={{ backgroundImage: `url('${backgroundImg}')` }}
      className={classes.hero_banner_container}
    >
      <div className={classes.overlay} />
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className={classes.headings_container}
      >
        <motion.li
          className={classes.heading}
          style={{ textAlign: "center" }}
          variants={item}
        >
          {heading}
          <br />
          {heading2}
        </motion.li>
        <motion.li className={classes.subheading} variants={item}>
          {subheading1}
        </motion.li>
        <motion.li className={classes.subheading} variants={item}>
          {subheading2}
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default HeroBanner;
