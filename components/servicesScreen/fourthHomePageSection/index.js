import React, { useEffect } from "react";
import classes from "./fourthHomePageSection.module.css";
import service_1 from "../../../public/assets/services_assets/service_1.png";
import service_2 from "../../../public/assets/services_assets/service_2.png";
import service_3 from "../../../public/assets/services_assets/service_3.png";
import Link from "next/link";
import { SERVICE_DETAILS } from "../../../data/services-details";
import AOS from "aos";
import "aos/dist/aos.css";

function FourthHomePageSection({ refs }) {
  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className={classes.container}>
      {SERVICE_DETAILS?.map((service, index) => (
        <div ref={refs[index]} key={index} className={classes.feedback_section}>
          <div
            className={
              index % 2 === 0
                ? classes.img_container
                : classes.img_container_right
            }
          >
            <div
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className={classes.img_wrapper}
            >
              <img src={service_1.src} className={classes.img} />
              <div
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                className={
                  index % 2 === 0
                    ? classes.review_container
                    : classes.review_container_right
                }
              >
                <h3>{service.title}</h3>

                {service?.statement?.map((statement, index) => (
                  <p key={index}>{statement}</p>
                ))}
                <Link href={`/services/${service.id}-${service.title}`}>
                  <div className={classes.btn}>
                    <p>EXPLORE</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FourthHomePageSection;
