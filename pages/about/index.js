import Head from "next/head";
import Image from "next/image";
import FacingNorthDifference from "../../components/aboutScreen/facingNorthDifferenceSection";
import FourthHomePageSection from "../../components/aboutScreen/fourthHomePageSection";
import HeroBanner from "../../components/aboutScreen/heroBanner";
import OurTeamSection from "../../components/aboutScreen/ourTeamSection";
import TestimonialSection from "../../components/testimonialSection";

import styles from "./services.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <FourthHomePageSection />
      <FacingNorthDifference />
      <OurTeamSection />
      <TestimonialSection isOnlyFirstSection={true} />
    </div>
  );
}
