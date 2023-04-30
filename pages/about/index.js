import react, { useState, useRef } from "react";
import FacingNorthDifference from "../../components/aboutScreen/facingNorthDifferenceSection";
import FourthHomePageSection from "../../components/aboutScreen/fourthHomePageSection";
import HeroBanner from "../../components/aboutScreen/heroBanner";
import OurTeamSection from "../../components/aboutScreen/ourTeamSection";
import TestimonialSection from "../../components/testimonialSection";
import Tooltip from "../../components/tooltip";
import { ABOUT_US_INFO } from "../../data/about";

import styles from "./services.module.css";

export default function AboutUs() {
  const homeBannerRef = useRef(null);
  const introRef = useRef(null);
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const facingRef = useRef(null);
  const teamRef = useRef(null);
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
      title: "Our Story",
      ref: storyRef,
    },
    {
      title: "Our Mission",
      ref: missionRef,
    },
    {
      title: "Our Vision",
      ref: visionRef,
    },
    {
      title: "Facing North Difference",
      ref: facingRef,
    },
    {
      title: "Our Team",
      ref: teamRef,
    },
    {
      title: "Client Testimonials",
      ref: testimonialRef,
    },
  ];

  return (
    <div className={styles.container}>
      <div ref={homeBannerRef}>
        <HeroBanner />
      </div>
      <Tooltip refArray={pageComponentsRef} />
      <FourthHomePageSection
        introRef={introRef}
        storyRef={storyRef}
        missionRef={missionRef}
        visionRef={visionRef}
        info={ABOUT_US_INFO}
      />
      <div ref={facingRef}>
        <FacingNorthDifference info={ABOUT_US_INFO?.why_choose} />
      </div>
      <div ref={teamRef}>
        <OurTeamSection />
      </div>
      <div ref={testimonialRef}>
        <TestimonialSection isOnlyFirstSection={true} />
      </div>
    </div>
  );
}
