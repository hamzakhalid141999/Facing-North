import FourthHomePageSection from "../../components/packageTourDetailScreen/fourthHomePageSection";
import HeroBanner from "../../components/packageTourDetailScreen/heroBanner";
import SecondHomePageSection from "../../components/packageTourDetailScreen/secondHomePageSection";
import ThirdHomePageSection from "../../components/packageTourDetailScreen/thirdHomePageSection";
import PositiveImpacts from "../../components/packageTourDetailScreen/positiveImpacts";
import styles from "./destination_detail.module.css";
import MapSection from "../../components/packageTourDetailScreen/mapSection";
import TemperatureGraph from "../../components/packageTourDetailScreen/temperatureGraph";
import LargeBannerCarousel from "../../components/sharedComponents/largeBannerCarousel";

export default function PackageTour() {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <SecondHomePageSection />
      <ThirdHomePageSection />
      <MapSection />
      <PositiveImpacts />
      <TemperatureGraph />
      <LargeBannerCarousel isWhite={true} />
      <FourthHomePageSection />
    </div>
  );
}
