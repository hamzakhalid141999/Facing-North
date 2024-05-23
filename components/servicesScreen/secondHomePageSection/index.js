import React, { useEffect } from "react";
import classes from "./secondHomePageSection.module.css";
import second_section_bg from "../../../public/assets/homepage/second_section_bg.png";
import second_section_pic1 from "../../../public/assets/homepage/second_section_pic1.png";
import second_section_pic2 from "../../../public/assets/homepage/second_section_pic2.png";
import BestPlacesCards from "../components/bestPlacesCards";
import pic from "../../../public/assets/about_us_cards/5.jpg";

import place_1 from "../../../public/assets/destination_detail_assets/card1.png";
import place_2 from "../../../public/assets/destination_detail_assets/card2.png";
import place_3 from "../../../public/assets/destination_detail_assets/card3.png";

import AOS from "aos";
import "aos/dist/aos.css";

function SecondHomePageSection() {
  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.single_row}>
        <div className={classes.left_panel}>
          <h2 data-aos="fade-left">Embark on Opulent Pakistani Voyages</h2>
          <p data-aos="fade-left">
            Experience the ultimate adventure in Pakistan with our custom
            itineraries that combine trekking, yoga, and outdoor adventures.
            From the Karakoram mountain range to the Neelum River, Pakistan has
            something for every traveler. Let us craft an unforgettable journey.
            Don't miss out on this opportunity to explore the very best that
            Pakistan has to offer.
          </p>
        </div>
        <div className={classes.right_panel}>
          <div className={classes.img_container}>
            <img data-aos="fade-right" className={classes.img1} src={pic.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHomePageSection;
