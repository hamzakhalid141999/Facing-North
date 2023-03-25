import react, { useState, useEffect } from "react";
import FourthHomePageSection from "../../../components/destinationDetailScreen/fourthHomePageSection";
import HeroBanner from "../../../components/destinationDetailScreen/heroBanner";
import SecondHomePageSection from "../../../components/destinationDetailScreen/secondHomePageSection";
import TopPlacesToVisit from "../../../components/destinationDetailScreen/thirdHomePageSection";
import TestimonialSection from "../../../components/testimonialSection";
import styles from "./destination_detail.module.css";
import LargeBannerCarousel from "../../../components/sharedComponents/largeBannerCarousel";
import { DESTIATIONS } from "../../../data/destinations";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [id, setId] = useState();
  const [destinationData, setDestinationData] = useState();

  useEffect(() => {
    const routerId = router?.query?.id;
    setId(parseInt(routerId?.split("-")[0]));
  }, [router]);

  useEffect(() => {
    if (id) {
      DESTIATIONS?.map((destination, index) => {
        if (destination.id === id) {
          setDestinationData(destination);
        }
      });
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <HeroBanner
        title={destinationData?.title}
        h1={destinationData?.h1}
        h2={destinationData?.h2}
      />
      <SecondHomePageSection
        title={destinationData?.title}
        detail={destinationData?.detailed_description}
      />
      <TopPlacesToVisit
        places_stay={destinationData?.places_to_stay}
        places={destinationData?.places_to_visit}
      />
      <LargeBannerCarousel />
      <TestimonialSection />
    </div>
  );
}
