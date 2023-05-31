import react, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import FourthHomePageSection from "../components/homescreen/fourthHomePageSection";
import SecondHomePageSection from "../components/homescreen/secondHomePageSection";
import ThirdHomePageSection from "../components/homescreen/thirdHomePageSection";
import TestimonialSection from "../components/testimonialSection";
import Tooltip from "../components/tooltip";
import styles from "../styles/Home.module.css";
import ScrollbarWrapper from "../smooth-scrollbar";
import HeroBanner from "../components/sharedComponents/heroBanner";

export default function Home() {
  const homeBannerRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const testimonialSectionRef = useRef(null);

  const pageComponentsRef = [
    {
      title: "Hero Banner",
      ref: homeBannerRef,
    },
    {
      title: "Intro Section",
      ref: secondSectionRef,
    },
    {
      title: "Explore our worlds",
      ref: thirdSectionRef,
    },
    {
      title: "Lands of discovery",
      ref: fourthSectionRef,
    },
    {
      title: "Client Testimonials",
      ref: testimonialSectionRef,
    },
  ];

  return (
    // <ScrollbarWrapper options={{ damping: 0.1 }}>
    <div className={styles.container}>
      <div ref={homeBannerRef}>
        <HeroBanner
          backgroundImg={"/assets/navbar-assets/hero_banner.png"}
          heading={"Discover Pakistan"}
          subheading1={
            "Discover Pakistan's Cultural and Natural Wonders in Style with Our Exclusive Tours"
          }
          subheading2={
            "Indulge in the Marvels of Pakistan's Culture and Nature with Our Magnificent Excursions"
          }
        />
      </div>
      <Tooltip refArray={pageComponentsRef} />

      <div ref={secondSectionRef}>
        <SecondHomePageSection />
      </div>
      <div ref={thirdSectionRef}>
        <ThirdHomePageSection />
      </div>
      <div ref={fourthSectionRef}>
        <FourthHomePageSection />
      </div>
      <div ref={testimonialSectionRef}>
        <TestimonialSection isOnlyFirstSection={true} />
      </div>
    </div>
    // </ScrollbarWrapper>
  );
}
