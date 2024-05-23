import React from "react";
import classes from "./heroBanner.module.css";
import { motion } from "framer-motion";

function HeroBanner() {
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

  return (
    <div className={classes.hero_banner_container}>
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
          Extraordinary Vision
          <br />
          Unparallel Results
        </motion.li>
        <motion.li className={classes.subheading} variants={item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl
          libero, ornare non libero vitae, vestibulum egestas tellus. Curabitur
          sodales eleifend sem laoreet varius.{" "}
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default HeroBanner;
