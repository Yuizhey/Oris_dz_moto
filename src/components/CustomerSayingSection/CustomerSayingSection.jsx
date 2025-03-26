import React from "react";
import styles from "./CustomerSayingSection.module.css";
import CustomerSayingCard from "./CustomerSayingCard";
import reviews from "../../constants/CustomerSayingSectionReviews";

const CustomerSayingSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What Our Customer Saying...</h2>
      <div className={styles.cardsContainer}>
        {reviews.map((review, index) => (
          <CustomerSayingCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerSayingSection;
