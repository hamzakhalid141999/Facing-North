import Head from "next/head";
import Image from "next/image";
import FourthHomePageSection from "../../components/destinationScreen/fourthHomePageSection";
import HeroBanner from "../../components/destinationScreen/heroBanner";
import SecondHomePageSection from "../../components/destinationScreen/secondHomePageSection";
import ThirdHomePageSection from "../../components/destinationScreen/thirdHomePageSection";
import styles from "./destination.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <SecondHomePageSection />
      <ThirdHomePageSection />
      <FourthHomePageSection />
    </div>
  );
}
