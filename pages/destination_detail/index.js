import react, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FourthHomePageSection from "../../components/destinationDetailScreen/fourthHomePageSection";
import HeroBanner from "../../components/destinationDetailScreen/heroBanner";
import SecondHomePageSection from "../../components/destinationDetailScreen/secondHomePageSection";
import TopPlacesToVisit from "../../components/destinationDetailScreen/thirdHomePageSection";
import TestimonialSection from "../../components/testimonialSection";
import styles from "./destination_detail.module.css";
import LargeBannerCarousel from "../../components/sharedComponents/largeBannerCarousel";
import Tooltip from "../../components/tooltip";

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

  return (
    <div className={styles.container}>
      <Tooltip refArray={pageComponentsRef} />
      <div ref={homeBannerRef}>
        <HeroBanner />
      </div>
      <div ref={overviewRef}>
        <SecondHomePageSection />
      </div>
      <div bestPlaceRef={bestPlaceRef} ref={placesRef}>
        <TopPlacesToVisit />
      </div>
      <div ref={galleryRef}>
        <LargeBannerCarousel />
      </div>
      <div ref={testimonialsRef}>
        <TestimonialSection isOnlyFirstSection={true} />
      </div>
    </div>
  );
}
