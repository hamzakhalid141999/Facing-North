import react, { useState, useEffect } from "react";
import FourthHomePageSection from "../../../components/servicesDetailsScreen/fourthHomePageSection";
import HeroBanner from "../../../components/servicesDetailsScreen/heroBanner";
import SecondHomePageSection from "../../../components/servicesDetailsScreen/secondHomePageSection";
import ThirdHomePageSection from "../../../components/servicesDetailsScreen/thirdHomePageSection";
import TopDestinations from "../../../components/servicesDetailsScreen/topDestinations";
import TopItineraries from "../../../components/servicesDetailsScreen/topItineraries";
import TestimonialSection from "../../../components/testimonialSection";
import styles from "./services_details.module.css";
import { useRouter } from "next/router";
import { SERVICE_DETAILS } from "../../../data/services-details";

export default function ServicesDetails() {
  const router = useRouter();
  const [id, setId] = useState();
  const [serviceDetailData, setServiceDetailData] = useState();

  useEffect(() => {
    const routerId = router?.query?.id;
    setId(parseInt(routerId?.split("-")[0]));
  }, [router]);

  useEffect(() => {
    if (id) {
      SERVICE_DETAILS?.map((service, index) => {
        if (service.id === id) {
          setServiceDetailData(service);
        }
      });
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <HeroBanner
        h1={serviceDetailData?.h1}
        h2={serviceDetailData?.h2}
        title={serviceDetailData?.title}
      />
      <SecondHomePageSection data={serviceDetailData} />
      <TopDestinations places={serviceDetailData?.top_places} />
      <TopItineraries />
      {/* <ThirdHomePageSection /> */}
      {/* <FourthHomePageSection /> */}
    </div>
  );
}
