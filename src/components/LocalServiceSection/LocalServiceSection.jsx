import React, { useState } from 'react';
import { GrPrevious, GrNext } from "react-icons/gr";
import images from "../../constants/LocalServiceSectionImages.js";
import styles from "./LocalServiceSection.module.css";

function LocalServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Local Service We Provide</h1>
      
      <div className={styles.slider}>
        <button className={styles.navButton} onClick={prevSlide}>
          <GrPrevious />
        </button>
        
        <div className={styles.sliderTrack}>
          {getVisibleImages().map((item) => (
            <div key={item.id} className={styles.slideContainer}>
              <img 
                src={item.path} 
                className={styles.slideImage}
                alt={`Service ${item.id}`}
              />
              <p className={styles.locationText}>{item.text}</p>
            </div>
          ))}
        </div>
        
        <button className={styles.navButton} onClick={nextSlide}>
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default LocalServiceSection;