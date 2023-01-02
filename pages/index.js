import Head from "next/head";
import Image from "next/image";
import FourthHomePageSection from "../components/homescreen/fourthHomePageSection";
import HeroBanner from "../components/homescreen/heroBanner";
import SecondHomePageSection from "../components/homescreen/secondHomePageSection";
import ThirdHomePageSection from "../components/homescreen/thirdHomePageSection";
import styles from "../styles/Home.module.css";

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
