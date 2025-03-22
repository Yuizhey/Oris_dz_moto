import React, { useState } from 'react';
import styles from "./MotoCycleIndividualCard.module.css";
import { LuMessageCircleHeart } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

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

  // Состояния для Pick-Up и Drop-Off
  const [pickUpDate, setPickUpDate] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');

  // Вычисляем разницу между Pick-Up и Drop-Off
  const calculateDuration = () => {
    if (!pickUpDate || !pickUpTime || !dropOffDate || !dropOffTime) {
      return { hours: 0, cost: 0 };
    }

    const pickUpDateTime = new Date(`${pickUpDate}T${pickUpTime}`);
    const dropOffDateTime = new Date(`${dropOffDate}T${dropOffTime}`);

    // Разница в миллисекундах
    const diffInMs = dropOffDateTime - pickUpDateTime;

    // Преобразуем разницу в часы
    const diffInHours = diffInMs / (1000 * 60 * 60);

    // Вычисляем стоимость
    const cost = diffInHours * pricePerHour;

    return { hours: diffInHours, cost };
  };

  const { hours, cost } = calculateDuration();

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
      <div className={styles["motorcycle-card-firstContainer"]}>
        <div className={styles.slider}>
          <div className={styles["slider-images"]}>
            <img
              src={`../../${images[currentIndex]}`} // Используем правильный путь к изображению
              alt={`Slide ${currentIndex + 1}`}
            />
          </div>
          <div className={styles["slider-controls"]}>
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
          </div>
        </div>
        <div className={styles.booking}>
          <LuMessageCircleHeart size={"3rem"} style={{ marginLeft: "250px" }} />
          <div className={styles["booking-location"]}>
            <label htmlFor="location"><IoLocationOutline /> Location</label>
            <input type="text" name="location" placeholder="location" />
          </div>
          <div className={styles["booking-pick_up"]}>
            <label htmlFor="pick_up"><MdOutlineDateRange /> Pick-Up</label>
            <div className={styles["booking-pick_up date"]}>
              <input
                type="date"
                name="pick_up"
                value={pickUpDate}
                onChange={(e) => setPickUpDate(e.target.value)}
              />
              <input
                type="time"
                name="pick_up"
                value={pickUpTime}
                onChange={(e) => setPickUpTime(e.target.value)}
              />
            </div>
          </div>
          <div className={styles["booking-drop_off"]}>
            <label htmlFor="drop_off"><MdOutlineDateRange /> Drop-Off</label>
            <div className={styles["booking-drop_off date"]}>
              <input
                type="date"
                name="drop_off"
                value={dropOffDate}
                onChange={(e) => setDropOffDate(e.target.value)}
              />
              <input
                type="time"
                name="drop_off"
                value={dropOffTime}
                onChange={(e) => setDropOffTime(e.target.value)}
              />
            </div>
          </div>
          <div className={styles["booking-duration"]}>
            <label htmlFor="duration">Duration:</label>
            <div>
              <p>Разница: {hours.toFixed(2)} часов</p>
              <input
                type="number"
                value={cost.toFixed(2)} // Округляем до 2 знаков после запятой
                readOnly // Делаем инпут некликабельным
                placeholder="Total cost"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Второй контейнер: информация и характеристики */}
      <div className={styles["motorcycle-card-secondContainer"]}>
        <div className={styles.information}>
          <h2 className={styles["information-title"]}>{name}</h2>
          <p className={styles["information-text"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, sit
            molestiae. Quos consectetur amet voluptatibus asperiores optio
            reprehenderit autem, facilis placeat porro, illum laudantium
            consequatur quis ad et minus, sit quisquam similique esse perferendis
            recusandae veniam! Voluptates minus pariatur repudiandae.
          </p>
        </div>
        <div className={styles.specifications}>
          <h4 className={styles["specifications-title"]}>Specifications</h4>
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