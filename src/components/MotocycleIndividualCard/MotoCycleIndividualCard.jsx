import React, { useState } from 'react';
import styles from "./MotoCycleIndividualCard.module.css";

function MotoCycleIndividualCard({ motorcycle, type }) {
  // Если транспорт не передан, показываем сообщение об ошибке
  if (!motorcycle) {
    return <div>Транспорт не найден</div>;
  }

  const isMotocycle = type === "motocycles";

  // Деструктуризация для удобства
  const { id, imagePath, name, characteristics, pricePerHour } = motorcycle;
  const { seats, horsepower, fuel, engine } = characteristics;

  // Массив изображений (можно заменить на реальные данные)
  const images = [
    imagePath,
    imagePath,
    imagePath,
    imagePath,
  ];

  // Состояние для текущего индекса слайда
  const [currentIndex, setCurrentIndex] = useState(0);

  // Функции для переключения слайдов
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
      {/* Первый контейнер: слайдер и кнопка бронирования */}
      <div className="motorcycle-card-firstContainer">
        <div className={styles.slider}>
          <div className="slider-images">
            <img
              src={`../../${images[currentIndex]}`} // Используем правильный путь к изображению
              alt={`Slide ${currentIndex + 1}`}
            />
          </div>
          <div className="slider-controls">
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
          </div>
        </div>
      </div>

      {/* Второй контейнер: информация и характеристики */}
      <div className="motorcycle-card-secondContainer">
        <div className={styles.information}>
          <h2 className="information-title">{name}</h2>
          <p className="information-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, sit
            molestiae. Quos consectetur amet voluptatibus asperiores optio
            reprehenderit autem, facilis placeat porro, illum laudantium
            consequatur quis ad et minus, sit quisquam similique esse perferendis
            recusandae veniam! Voluptates minus pariatur repudiandae.
          </p>
        </div>
        <div className={styles.specifications}>
          <h4 className="specifications-title">Specifications</h4>
          <div className={styles.cardInfo}>
            <p className={styles.characteristic}>Seats: {seats}</p>
            <p className={styles.characteristic}>Horsepower: {horsepower}</p>
          </div>
          <div className={styles.cardInfo}>
            <p className={styles.characteristic}>Fuel: {fuel}</p>
            <p className={styles.characteristic}>Engine: {engine}</p>
          </div>

          {/* Условный рендеринг для мотоциклов и автомобилей */}
          {isMotocycle ? (
            <>
              <div className={styles.cardInfo}>
                <p className={styles.characteristic}>
                  Front Brake: {characteristics.frontBrake}
                </p>
                <p className={styles.characteristic}>
                  Stroke: {characteristics.stroke}
                </p>
              </div>
              <div className={styles.cardInfo}>
                <p className={styles.characteristic}>
                  Gear Box: {characteristics.gearBox}
                </p>
                <p className={styles.characteristic}>
                  Overall Mileage: {characteristics.mileage}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.cardInfo}>
                <p className={styles.characteristic}>
                  Doors: {characteristics.doors}
                </p>
                <p className={styles.characteristic}>
                  Drive: {characteristics.drive}
                </p>
              </div>
              <div className={styles.cardInfo}>
                <p className={styles.characteristic}>
                  Type: {characteristics.type}
                </p>
                <p className={styles.characteristic}>
                  Luggage: {characteristics.luggage}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MotoCycleIndividualCard;