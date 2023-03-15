import React from "react";
import classes from "./secondHomePageSection.module.css";
import second_section_bg from "../../../public/assets/homepage/second_section_bg.png";
import second_section_pic1 from "../../../public/assets/homepage/second_section_pic1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import right_arrow from "../../../public/assets/services_details_assets/right_arrow.svg";
import left_arrow from "../../../public/assets/services_details_assets/left_arrow.svg";

function SecondHomePageSection() {
  return (
    <div className={classes.container}>
      <div className={classes.inner_container}>
        <img src={second_section_bg.src} className={classes.bg} />

        <div className={classes.carousel_container}>
          <Carousel
            renderArrowNext={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <img
                  src={left_arrow.src}
                  style={{
                    width: "60px",
                    height: "60px",
                    position: "absolute",
                    zIndex: "1000000",
                  }}
                  className={"react-multiple-carousel__arrow--left"}
                  onClick={onClickHandler}
                />
              )
            }
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <img
                  src={right_arrow.src}
                  style={{
                    width: "60px",
                    height: "60px",
                    position: "absolute",
                    zIndex: "1000000",
                  }}
                  className={"react-multiple-carousel__arrow--right"}
                  onClick={onClickHandler}
                />
              )
            }
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={true}
          >
            <div className={classes.single_row}>
              <div className={classes.left_panel}>
                <h2>Welcome to our World</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  et finibus urna. In ut justo quis metus rhoncus cursus quis
                  vitae magna. Ut nibh metus, accumsan viverra massa ac,
                  sagittis pulvinar ipsum. Aenean lacus augue, sollicitudin eu
                  eros eleifend, luctus ultricies lectus. Nam elementum tempor
                  arcu, ut faucibus ligula pharetra eu. Mauris tempus est est,
                  non mattis massa accumsan eu. Fusce nisl mauris, sollicitudin
                  quis ullamcorper et, mollis nec odio. Aenean feugiat est in
                  vestibulum posuere. Sed commodo elit neque, sed rutrum risus
                  semper in. Vestibulum eu lorem condimentum, semper neque
                  fringilla, elementum velit.
                </p>
              </div>
              <div className={classes.right_panel}>
                <div className={classes.img_container}>
                  <img className={classes.img1} src={second_section_pic1.src} />
                </div>
              </div>
            </div>

            <div className={classes.single_row}>
              <div className={classes.left_panel}>
                <h2>Welcome to our World</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  et finibus urna. In ut justo quis metus rhoncus cursus quis
                  vitae magna. Ut nibh metus, accumsan viverra massa ac,
                  sagittis pulvinar ipsum. Aenean lacus augue, sollicitudin eu
                  eros eleifend, luctus ultricies lectus. Nam elementum tempor
                  arcu, ut faucibus ligula pharetra eu. Mauris tempus est est,
                  non mattis massa accumsan eu. Fusce nisl mauris, sollicitudin
                  quis ullamcorper et, mollis nec odio. Aenean feugiat est in
                  vestibulum posuere. Sed commodo elit neque, sed rutrum risus
                  semper in. Vestibulum eu lorem condimentum, semper neque
                  fringilla, elementum velit.
                </p>
              </div>
              <div className={classes.right_panel}>
                <div className={classes.img_container}>
                  <img className={classes.img1} src={second_section_pic1.src} />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
