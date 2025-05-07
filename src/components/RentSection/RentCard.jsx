import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./RentCard.module.css";

const RentCard = ({ title, description, image, tags, buttonText, reversed }) => {
  const navigate = useNavigate();

  const handleRentClick = () => {
    navigate('/motohomepage');
  };

  return (
    <div className={`${styles.card} ${reversed ? styles.reversed : ""}`}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <p className={styles.description}>{description}</p>
        <button className={styles.button} onClick={handleRentClick}>{buttonText}</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
    </div>
  );
};

export default RentCard;
