import Head from "next/head";
import Image from "next/image";
import FourthHomePageSection from "../../components/destinationDetailScreen/fourthHomePageSection";
import HeroBanner from "../../components/destinationDetailScreen/heroBanner";
import SecondHomePageSection from "../../components/destinationDetailScreen/secondHomePageSection";
import ThirdHomePageSection from "../../components/destinationDetailScreen/thirdHomePageSection";
import styles from "./destination_detail.module.css";

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
