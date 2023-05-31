import react, { useState, useEffect, useRef } from "react";
import FourthHomePageSection from "../../../components/destinationDetailScreen/fourthHomePageSection";
import HeroBanner from "../../../components/destinationDetailScreen/heroBanner";
import SecondHomePageSection from "../../../components/destinationDetailScreen/secondHomePageSection";
import TopPlacesToVisit from "../../../components/destinationDetailScreen/thirdHomePageSection";
import TestimonialSection from "../../../components/testimonialSection";
import styles from "./destination_detail.module.css";
import LargeBannerCarousel from "../../../components/sharedComponents/largeBannerCarousel";
import { DESTIATIONS } from "../../../data/destinations";
import { useRouter } from "next/router";
import Tooltip from "../../../components/tooltip";

export default function Home() {
  const homeBannerRef = useRef(null);
  const overviewRef = useRef(null);
  const placesRef = useRef(null);
  const bestPlaceRef = useRef(null);
  const toursRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialsRef = useRef(null);

  const pageComponentsRef = [
    {
      title: "Hero Banner",
      ref: homeBannerRef,
    },
    {
      title: "Overview Section",
      ref: overviewRef,
    },
    {
      title: "Top Places to visit",
      ref: placesRef,
    },
    {
      title: "Best places to Stay",
      ref: bestPlaceRef,
    },
    {
      title: "Tours Featuring Destination",
      ref: toursRef,
    },
    {
      title: "Gallery",
      ref: galleryRef,
    },
    {
      title: "Client Testimonials",
      ref: testimonialsRef,
    },
  ];

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

  console.log(destinationData);

  return (
    <div className={styles.container}>
      <Tooltip refArray={pageComponentsRef} />

      <div ref={homeBannerRef}>
        <HeroBanner
          title={destinationData?.title}
          h1={destinationData?.h1}
          h2={destinationData?.h2}
        />
      </div>

      <div ref={overviewRef}>
        <SecondHomePageSection
          title={destinationData?.title}
          detail={destinationData?.detailed_description}
        />
      </div>

      <TopPlacesToVisit
        placesRef={placesRef}
        toursRef={toursRef}
        bestPlaceRef={bestPlaceRef}
        places_stay={destinationData?.places_to_stay}
        places={destinationData?.places_to_visit}
      />

      <div ref={galleryRef}>
        <LargeBannerCarousel />
      </div>
      <div ref={testimonialsRef}>
        <TestimonialSection isOnlyFirstSection={true} />
      </div>
    </div>
  );
}
