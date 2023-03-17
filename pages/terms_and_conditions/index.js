import ContentSection from "../../components/termsAndConditions/contentSection";
import HeroBanner from "../../components/termsAndConditions/heroBanner";
import styles from "./terms_and_conditions.module.css";

export default function TermsAndCondition() {
  return (
    <div className={styles.container}>
      <HeroBanner />
      <ContentSection />
    </div>
  );
}
