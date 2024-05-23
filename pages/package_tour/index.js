import react, { useState, useRef } from "react";
import FourthHomePageSection from "../../components/packageTourScreen/fourthHomePageSection";
import HeroBanner from "../../components/sharedComponents/heroBanner/index";
import SecondHomePageSection from "../../components/packageTourScreen/secondHomePageSection";
import BestPlacesSection from "../../components/packageTourScreen/bestPlacesSection";
import PositiveImpacts from "../../components/packageTourScreen/positiveImpacts";
import styles from "./destination_detail.module.css";
import MapSection from "../../components/packageTourScreen/mapSection";
import StartYourJourneySection from "../../components/packageTourScreen/thirdHomePageSection";
import TestimonialSection from "../../components/testimonialSection/index";
import Tooltip from "../../components/tooltip";

export default function PackageTour() {
  const homeBannerRef = useRef(null);
  const overviewRef = useRef(null);
  const placesRef = useRef(null);
  const journeyRef = useRef(null);
  const testimonialSectionRef = useRef(null);
  const blogsSectionRef = useRef(null);

  const pageComponentsRef = [
    {
      title: "Hero Banner",
      ref: homeBannerRef,
    },
    {
      title: "Overview Section",
      ref: overviewRef,
    },
    {
      title: "Best Places to stay",
      ref: placesRef,
    },
    {
      title: "Start your journey",
      ref: journeyRef,
    },
    {
      title: "Client Testimonials",
      ref: testimonialSectionRef,
    },
    {
      title: "Blogs",
      ref: blogsSectionRef,
    },
  ];

  return (
    <div className={styles.container}>
      <div ref={homeBannerRef}>
        <HeroBanner
          backgroundImg={"/assets/package_tour_assets/banner.png"}
          heading={"Extraordinary Vision"}
          heading2={"Unparallel Results"}
          subheading1={
            "Unveiling the Breathtaking Majesty of Pakistan's Northern Splendor: A Mesmerising Symphony of Enchanting Landscapes, Majestic Peaks, and Serene Beauty Awaits Your Exploration."
          }
        />
      </div>
      <Tooltip refArray={pageComponentsRef} />
      <div ref={overviewRef}>
        <SecondHomePageSection />
      </div>
      <div ref={placesRef}>
        <BestPlacesSection />
      </div>
      <div ref={journeyRef}>
        <StartYourJourneySection />
      </div>
      <div ref={testimonialSectionRef}>
        <TestimonialSection isOnlyFirstSection={true} />
      </div>
      <div ref={blogsSectionRef}>
        <FourthHomePageSection />
      </div>
    </div>
  );
}
