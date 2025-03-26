import React from "react";
import styles from "./RentSection.module.css";
import ServiceCard from "./RentCard";
import services from "../../constants/RentData";

const RentSection = () => {
  return (
    <section className={styles.section}>
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} reversed={index % 2 !== 0} />
      ))}
    </section>
  );
};

export default RentSection;
