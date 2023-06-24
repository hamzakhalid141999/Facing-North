import React, { useState, useEffect } from "react";
import classes from "./blog.module.css";
import bg from "../../../public/assets/blog-page-assets/bg.png";
import BlogCard from "../../../components/blogsScreen/components/blogCard";
import card_bg from "../../../public/assets/blog_card_assets/bg.png";
import { useRouter } from "next/router";
import { blogs } from "../../../data/blogs";

function Blog() {
  const router = useRouter();
  const [blogId, setBlogId] = useState();
  const [blog, setBlog] = useState();

  useEffect(() => {
    if (router.query.id) {
      setBlogId(router.query.id);
    }
  }, [router.query]);

  useEffect(() => {
    if (blogId && blogs?.length > 0) {
      setBlog(
        blogs?.filter((blog) => parseInt(blog?.id) === parseInt(blogId))[0]
      );
    }
  }, [blogId, blogs]);

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div className={classes.banner_container}>
          <div className={classes.overlay} />
          <div className={classes.banner_content_container}>
            <h2>{blog?.title}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
              finibus urna. In ut justo quis metus rhoncus cursus quis vitae
              magna. Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
              ipsum. Aenean lacus augue, sollicitudin eu eros eleifend, luctus
              ultricies lectus
            </p>
          </div>
          <img className={classes.bg} src={bg.src} />
        </div>

        {blog?.paras?.map((para, index) => (
          <>
            <p style={{ textAlign: "left", width: "100%" }}>
              {para?.heading && para?.heading}
            </p>

            <p key={index} className={classes.para}>
              {para?.para ? para?.para : para}
            </p>
          </>
        ))}

        <div className={classes.other_blogs_container}>
          <h2 className={classes.other_blogs_heading}>You may also like</h2>
          <div className={classes.blogs_container}>
            {
              blogs
                ?.filter((blog, index) => index < 3)
                ?.map((blog, index) => (
                  <BlogCard key={index} blogDetails={blog} pic={card_bg} />
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
