import react, { useState, useRef } from "react";
import FourthHomePageSection from "../../components/servicesScreen/fourthHomePageSection";
import HeroBanner from "../../components/sharedComponents/heroBanner";
import SecondHomePageSection from "../../components/servicesScreen/secondHomePageSection";
import ThirdHomePageSection from "../../components/servicesScreen/thirdHomePageSection";
import Tooltip from "../../components/tooltip";
import styles from "./services.module.css";

export default function ServicesDetails() {
  const homeBannerRef = useRef(null);
  const introRef = useRef(null);
  const trekkingRef = useRef(null);
  const pilgrimsRef = useRef(null);
  const wellnessRef = useRef(null);
  const culinaryRef = useRef(null);
  const landscapeRef = useRef(null);
  const testimonialRef = useRef(null);

  const pageComponentsRef = [
    {
      title: "Hero Banner",
      ref: homeBannerRef,
    },
    {
      title: "Intro Statement",
      ref: introRef,
    },
    {
      title: "Trekking and Camping",
      ref: trekkingRef,
    },
    {
      title: "The Pilgrims Journey to Pakistan",
      ref: pilgrimsRef,
    },
    {
      title: "Wellness and Yoga Retreats",
      ref: wellnessRef,
    },
    {
      title: "Culinary and Hospitality Experience",
      ref: culinaryRef,
    },
    {
      title: "Landscape Photography Excursions",
      ref: landscapeRef,
    },
  ];

  return (
    <div className={styles.container}>
      <Tooltip refArray={pageComponentsRef} />
      <div ref={homeBannerRef}>
        <HeroBanner
          heading={"Services"}
          subheading1={
            " Experience the ultimate adventure in Pakistan with our custom itineraries blending trekking, yoga retreats, and outdoor activities. Explore the Karakoram mountains and Neelum River for an unforgettable journey."
          }
          backgroundImg={"/assets/services_assets/banner.png"}
        />
      </div>
      <div ref={introRef}>
        <SecondHomePageSection />
      </div>

      <FourthHomePageSection
        refs={[
          trekkingRef,
          pilgrimsRef,
          wellnessRef,
          culinaryRef,
          landscapeRef,
        ]}
      />
    </div>
  );
}
