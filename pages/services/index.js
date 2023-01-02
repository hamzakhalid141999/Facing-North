import Head from "next/head";
import Image from "next/image";
import FourthHomePageSection from "../../components/servicesScreen/fourthHomePageSection";
import HeroBanner from "../../components/servicesScreen/heroBanner";
import SecondHomePageSection from "../../components/servicesScreen/secondHomePageSection";
import ThirdHomePageSection from "../../components/servicesScreen/thirdHomePageSection";
import styles from "./services.module.css";

export default function ServicesDetails() {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <SecondHomePageSection />
      <FourthHomePageSection />
    </div>
  );
}
