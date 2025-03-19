import React, { useState } from 'react';
import motocyclesConsts from "../../constants/MotocyclesConsts.js"

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
    <div className="motorcycle-card">
        <div className="slider">
            <div className="slider-images">
                <img src={`../../${images[currentIndex]}`} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <div className="slider-controls">
                <button onClick={prevSlide}>Prev</button>
                <button onClick={nextSlide}>Next</button>
            </div>
        </div>
      <p>{motorcycle.name}</p>
    </div>
  );
};

export default MotoCycleIndividualCard