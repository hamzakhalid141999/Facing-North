import React from "react";
import classes from "./blog.module.css";
import bg from "../../../public/assets/blog-page-assets/bg.png";
import BlogCard from "../../../components/blogsScreen/components/blogCard";
import card_bg from "../../../public/assets/blog_card_assets/bg.png";

function Blog() {
  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div className={classes.banner_container}>
          <div className={classes.overlay} />
          <div className={classes.banner_content_container}>
            <h2>Your blog heading goes here</h2>
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

        <p className={classes.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus. Nam elementum tempor arcu, ut faucibus ligula pharetra eu.
          Mauris tempus est est, non mattis massa accumsan eu. Fusce nisl
          mauris, sollicitudin quis ullamcorper et, mollis nec odio. Aenean
          feugiat est in vestibulum posuere. Sed commodo elit neque, sed rutrum
          risus semper in. Vestibulum eu lorem condimentum, semper neque
          fringilla, elementum velit. Nam elementum tempor arcu, ut faucibus
          ligula pharetra eu. Mauris tempus est est, non mattis massa accumsan
          eu. Fusce nisl mauris, sollicitudin quis ullamcorper et, mollis nec
          odio. Aenean feugiat est in vestibulum posuere. Sed commodo elit
          neque, sed rutrum risus semper in. Vestibulum eu lorem condimentum,
          semper neque fringilla, elementum velit.
        </p>

        <p className={classes.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus. Nam elementum tempor arcu, ut faucibus ligula pharetra eu.
          Mauris tempus est est, non mattis massa accumsan eu. Fusce nisl
          mauris, sollicitudin quis ullamcorper et, mollis nec odio. Aenean
          feugiat est in vestibulum posuere. Sed commodo elit neque, sed rutrum
          risus semper in. Vestibulum eu lorem condimentum, semper neque
          fringilla, elementum velit. Nam elementum tempor arcu, ut faucibus
          ligula pharetra eu. Mauris tempus est est, non mattis massa accumsan
          eu. Fusce nisl mauris, sollicitudin quis ullamcorper et, mollis nec
          odio. Aenean feugiat est in vestibulum posuere. Sed commodo elit
          neque, sed rutrum risus semper in. Vestibulum eu lorem condimentum,
          semper neque fringilla, elementum velit. Mauris tempus est est, non
          mattis massa accumsan eu. Fusce nisl mauris, sollicitudin quis
          ullamcorper et, mollis nec odio. Aenean feugiat est in vestibulum
          posuere. Sed commodo elit neque, sed rutrum risus semper in.
          Vestibulum eu lorem condimentum, semper neque fringilla, elementum
          velit.
        </p>

        <p className={classes.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          finibus urna. In ut justo quis metus rhoncus cursus quis vitae magna.
          Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar ipsum.
          Aenean lacus augue, sollicitudin eu eros eleifend, luctus ultricies
          lectus. Nam elementum tempor arcu, ut faucibus ligula pharetra eu.
          Mauris tempus est est, non mattis massa accumsan eu. Fusce nisl
          mauris, sollicitudin quis ullamcorper et, mollis nec odio. Aenean
          feugiat est in vestibulum posuere. Sed commodo elit neque, sed rutrum
          risus semper in.
        </p>

        <div className={classes.other_blogs_container}>
          <h2 className={classes.other_blogs_heading}>You may also like</h2>
          <div className={classes.blogs_container}>
            <BlogCard pic={card_bg} />
            <BlogCard pic={card_bg} />
            <BlogCard pic={card_bg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
