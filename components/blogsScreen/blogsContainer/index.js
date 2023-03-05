import React from "react";
import BlogCard from "../components/blogCard";
import classes from "./blogsContainer.module.css";
import bg from "../../../public/assets/blog_card_assets/bg.png";

function BlogsContainer() {
  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        {" "}
        <p className={classes.title}>
          Find resources to improve your style from Imito Pakistan. Our blogs
          can help in your styling efficiently
        </p>
        <div className={classes.cards_container}>
          <BlogCard pic={bg} />
          <BlogCard pic={bg} />
          <BlogCard pic={bg} />
          <BlogCard pic={bg} />
          <BlogCard pic={bg} />
          <BlogCard pic={bg} />
          <BlogCard pic={bg} />
        </div>
      </div>
    </div>
  );
}

export default BlogsContainer;
