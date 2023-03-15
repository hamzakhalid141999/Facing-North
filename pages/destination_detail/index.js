import Head from "next/head";
import Image from "next/image";
import FourthHomePageSection from "../../components/destinationDetailScreen/fourthHomePageSection";
import HeroBanner from "../../components/destinationDetailScreen/heroBanner";
import SecondHomePageSection from "../../components/destinationDetailScreen/secondHomePageSection";
import TopPlacesToVisit from "../../components/destinationDetailScreen/thirdHomePageSection";
import TestimonialSection from "../../components/testimonialSection";
import styles from "./destination_detail.module.css";
import LargeBannerCarousel from "../../components/sharedComponents/largeBannerCarousel";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <SecondHomePageSection />
      <TopPlacesToVisit />
      <LargeBannerCarousel />
      <TestimonialSection />
    </div>
  );
}
