import FourthHomePageSection from "../../components/packageTourScreen/fourthHomePageSection";
import HeroBanner from "../../components/packageTourScreen/heroBanner";
import SecondHomePageSection from "../../components/packageTourScreen/secondHomePageSection";
import ThirdHomePageSection from "../../components/packageTourScreen/thirdHomePageSection";
import PositiveImpacts from "../../components/packageTourScreen/positiveImpacts";
import styles from "./destination_detail.module.css";
import MapSection from "../../components/packageTourScreen/mapSection";
import TemperatureGraph from "../../components/packageTourScreen/temperatureGraph";

export default function PackageTour() {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <SecondHomePageSection />
      <ThirdHomePageSection />
      <MapSection />
      <PositiveImpacts />
      <TemperatureGraph />
      <FourthHomePageSection />
    </div>
  );
}
