import React from "react";
import styles from "./WhyChooseUsSection.module.css";

const WhyChooseUsSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>Why Choose Us</h2>
        <p className={styles.description}>
          Booking a self-driving car with us is simple and easy. You can browse our
          selection of vehicles online, choose the car that best fits your needs, and
          book it for the duration of your choice.
        </p>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <span className={styles.number}>45k+</span>
          <span className={styles.label}>Success Tour</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.number}>1M+</span>
          <span className={styles.label}>Happy Customer</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.number}>3+</span>
          <span className={styles.label}>Year Experience</span>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
