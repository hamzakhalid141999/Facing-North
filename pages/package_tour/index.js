import FourthHomePageSection from "../../components/packageTourScreen/fourthHomePageSection";
import HeroBanner from "../../components/packageTourScreen/heroBanner";
import SecondHomePageSection from "../../components/packageTourScreen/secondHomePageSection";
import BestPlacesSection from "../../components/packageTourScreen/bestPlacesSection";
import PositiveImpacts from "../../components/packageTourScreen/positiveImpacts";
import styles from "./destination_detail.module.css";
import MapSection from "../../components/packageTourScreen/mapSection";
import StartYourJourneySection from "../../components/packageTourScreen/thirdHomePageSection";

export default function PackageTour() {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <SecondHomePageSection />
      <BestPlacesSection />
      <StartYourJourneySection />
      <FourthHomePageSection />
    </div>
  );
}
