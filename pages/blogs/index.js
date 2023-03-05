import React from "react";
import BlogsContainer from "../../components/blogsScreen/blogsContainer";
import HeroBanner from "../../components/blogsScreen/heroBanner";
import classes from "./blogs.module.css";

function Blogs() {
  return (
    <div className={classes.container}>
      <HeroBanner />
      <BlogsContainer />
    </div>
  );
}

export default Blogs;
