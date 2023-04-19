import react, { useState, useEffect } from "react";
import FourthHomePageSection from "../../../components/packageTourDetailScreen/fourthHomePageSection";
import HeroBanner from "../../../components/packageTourDetailScreen/heroBanner";
import SecondHomePageSection from "../../../components/packageTourDetailScreen/secondHomePageSection";
import ThirdHomePageSection from "../../../components/packageTourDetailScreen/thirdHomePageSection";
import PositiveImpacts from "../../../components/packageTourDetailScreen/positiveImpacts";
import styles from "../destination_detail.module.css";
import MapSection from "../../../components/packageTourDetailScreen/mapSection";
import TemperatureGraph from "../../../components/packageTourDetailScreen/temperatureGraph";
import LargeBannerCarousel from "../../../components/sharedComponents/largeBannerCarousel";
import TestimonialSection from "../../../components/testimonialSection";
import { ITINERARIES } from "../../../data/itienraries";
import { useRouter } from "next/router";

export default function PackageTour() {
  const router = useRouter();
  const [id, setId] = useState();
  const [itinerary, setItinerary] = useState();

  useEffect(() => {
    if (router.query.id) {
      console.log(router.query.id);
      setId(router.query.id);
    }
  }, [router.query.id]);

  useEffect(() => {
    if (id) {
      const itinerary = ITINERARIES?.filter(
        (itinerary, index) => parseInt(itinerary?.id) === parseInt(id)
      );
      setItinerary(itinerary[0]);
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <HeroBanner />
      <SecondHomePageSection />
      <ThirdHomePageSection itineraryData={itinerary} />
      <MapSection />
      <PositiveImpacts />
      <TemperatureGraph />
      <LargeBannerCarousel isWhite={true} />
      <TestimonialSection isWhite={true} isOnlyFirstSection={true} />
      <FourthHomePageSection />
    </div>
  );
}
