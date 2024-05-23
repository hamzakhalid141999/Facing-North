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
          "Answers to Your Most Common Questions: Clearing Doubts and Providing Clarity"
        }
      />
      <FaqContent />
    </div>
  );
}
