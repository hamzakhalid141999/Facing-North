import React from "react";
import classes from "./fourthHomePageSection.module.css";
import service_1 from "../../../public/assets/services_assets/service_1.png";
import service_2 from "../../../public/assets/services_assets/service_2.png";
import service_3 from "../../../public/assets/services_assets/service_3.png";
import Link from "next/link";
import { SERVICE_DETAILS } from "../../../data/services-details";

function FourthHomePageSection({ refs }) {
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
            <div className={classes.img_wrapper}>
              <img src={service_1.src} className={classes.img} />
              <div
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
