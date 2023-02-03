import FourthHomePageSection from "../../components/packageTourScreen/fourthHomePageSection";
import HeroBanner from "../../components/packageTourScreen/heroBanner";
import SecondHomePageSection from "../../components/packageTourScreen/secondHomePageSection";
import ThirdHomePageSection from "../../components/packageTourScreen/thirdHomePageSection";
import PositiveImpacts from "../../components/packageTourScreen/positiveImpacts";
import styles from "./destination_detail.module.css";

export default function PackageTour() {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <SecondHomePageSection />
      <ThirdHomePageSection />
      <PositiveImpacts />
      <FourthHomePageSection />
    </div>
  );
}
