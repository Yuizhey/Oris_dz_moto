import React from "react";
import styles from "./CustomerSayingCard.module.css";

const CustomerSayingCard = ({ image, text, author }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
        <h4 className={styles.author}>{author}</h4>
      </div>
    </div>
  );
};

export default CustomerSayingCard;
