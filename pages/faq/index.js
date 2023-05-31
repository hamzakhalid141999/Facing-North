import Head from "next/head";
import Image from "next/image";
import FaqContent from "../../components/faqScreen/faqContent";
import HeroBanner from "../../components/sharedComponents/heroBanner";
import styles from "./faq.module.css";

export default function FAQ() {
  return (
    <div className={styles.container}>
      <HeroBanner
        backgroundImg={"/assets/faq/banner.png"}
        heading={"Frequently Asked Questions"}
        subheading1={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl libero, ornare non libero vitae, vestibulum egestas tellus. Curabitur sodales eleifend sem laoreet varius."
        }
      />
      <FaqContent />
    </div>
  );
}
