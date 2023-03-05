import Link from "next/link";
import React from "react";
import classes from "./blogCard.module.css";

function BlogCard({ pic }) {
  return (
    <Link href="/blogs/1" passHref>
      <div className={classes.card_body}>
        <div className={classes.img_container}>
          <img src={pic.src} className={classes.img} />
        </div>
        <div className={classes.description_container}>
          <div className={classes.description_container_inner}>
            <h2>Your blog title goes here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
              finibus urna. In ut justo quis metus rhoncus cursus quis vitae
              magna
            </p>
            <h3>November 5, 2021</h3>
            <div className={classes.btn}>
              <p>READ MORE</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
