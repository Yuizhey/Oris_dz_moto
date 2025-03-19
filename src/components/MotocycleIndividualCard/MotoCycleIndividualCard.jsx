import React, { useState } from 'react';
import motocyclesConsts from "../../constants/MotocyclesConsts.js"
import styles from "./MotoCycleIndividualCard.module.css"

function MotoCycleIndividualCard({id}) {

    const motorcycle = motocyclesConsts.find(moto => moto.id.toString() === id.toString()); 

    if (!motorcycle) {
        return <div>Мотоцикл не найден</div>;
    }

    const images =[
        motorcycle.imagePath,
        motorcycle.imagePath,
        motorcycle.imagePath,
        motorcycle.imagePath,
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
    <div className={styles["motorcycle-card"]}>
        <div className="motorcycle-card-firstContainer">
            <div className={styles.slider}>
                <div className="slider-images">
                    <img src={`../../${images[currentIndex]}`} alt={`Slide ${currentIndex + 1}`} />
                </div>
                <div className="slider-controls">
                    <button onClick={prevSlide}>Prev</button>
                    <button onClick={nextSlide}>Next</button>
                </div>
            </div>
            <div className="book">
                
            </div>
        </div>
        <div className="motorcycle-card-secondContainer">
            <div className={styles.information}>
                <h2 className="information-title">{motorcycle.name}</h2>
                <p className="information-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, sit molestiae. 
                    Quos consectetur amet voluptatibus asperiores optio 
                    reprehenderit autem, facilis placeat porro, illum laudantium consequatur quis ad et minus, 
                    sit quisquam similique esse perferendis 
                    recusandae veniam! Voluptates minus pariatur repudiandae.
                </p>
            </div>
            <div className={styles.specifications}>
                <h4 className="specifications-title">Specifications</h4>
                <div className={styles.cardInfo}>
                    <p className={styles.characteristic}>Seats: {motorcycle.characteristics.seats}</p>
                    <p className={styles.characteristic}>Horsepower: {motorcycle.characteristics.horsepower}</p>
                </div>
                <div className={styles.cardInfo}>
                    <p className={styles.characteristic}>Fuel: {motorcycle.characteristics.fuel}</p>
                    <p className={styles.characteristic}>Engine: {motorcycle.characteristics.engine}</p>
                </div>
                <div className={styles.cardInfo}>
                    <p className={styles.characteristic}>Front Brake: {motorcycle.characteristics.frontBrake}</p>
                    <p className={styles.characteristic}>Stroke: {motorcycle.characteristics.stroke}</p>   
                </div>
                <div className={styles.cardInfo}>
                    <p className={styles.characteristic}>Gear Box: {motorcycle.characteristics.gearBox}</p>
                    <p className={styles.characteristic}>Overall Mileage: {motorcycle.characteristics.mileage}</p>   
                </div>
            </div>
        </div>
    </div>
  );
};

export default MotoCycleIndividualCard