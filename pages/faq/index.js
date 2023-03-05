import Head from "next/head";
import Image from "next/image";
import FaqContent from "../../components/faqScreen/faqContent";
import HeroBanner from "../../components/faqScreen/heroBanner";
import styles from "./faq.module.css";

export default function FAQ() {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <FaqContent />
    </div>
  );
}
