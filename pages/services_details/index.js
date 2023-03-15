import Head from "next/head";
import Image from "next/image";
import FourthHomePageSection from "../../components/servicesDetailsScreen/fourthHomePageSection";
import HeroBanner from "../../components/servicesDetailsScreen/heroBanner";
import SecondHomePageSection from "../../components/servicesDetailsScreen/secondHomePageSection";
import ThirdHomePageSection from "../../components/servicesDetailsScreen/thirdHomePageSection";
import TopDestinations from "../../components/servicesDetailsScreen/topDestinations";
import TopItineraries from "../../components/servicesDetailsScreen/topItineraries";
import TestimonialSection from "../../components/testimonialSection";
import styles from "./services_details.module.css";

export default function ServicesDetails() {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <SecondHomePageSection />
      <TopDestinations />
      <TopItineraries />
      {/* <ThirdHomePageSection /> */}
      <FourthHomePageSection />
    </div>
  );
}
