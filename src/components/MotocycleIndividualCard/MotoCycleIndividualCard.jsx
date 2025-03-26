import React, { useState } from 'react';
import styles from "./MotoCycleIndividualCard.module.css";
import { LuMessageCircleHeart } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { GrPrevious, GrNext } from "react-icons/gr";

function MotoCycleIndividualCard({ motorcycle, type }) {
  if (!motorcycle) {
    return <div>Транспорт не найден</div>;
  }

  const isMotocycle = type === "motocycles";
  const { id, imagePath, name, characteristics, pricePerHour } = motorcycle;
  const { seats, horsepower, fuel, engine } = characteristics;

  const images = [
    imagePath,
    imagePath,
    imagePath,
    imagePath,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [pickUpDate, setPickUpDate] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');

  const calculateDuration = () => {
    if (!pickUpDate || !pickUpTime || !dropOffDate || !dropOffTime) {
      return { hours: 0, cost: 0 };
    }

    const pickUpDateTime = new Date(`${pickUpDate}T${pickUpTime}`);
    const dropOffDateTime = new Date(`${dropOffDate}T${dropOffTime}`);
    const diffInMs = dropOffDateTime - pickUpDateTime;
    const diffInHours = diffInMs / (1000 * 60 * 60);
    const cost = diffInHours * pricePerHour;

    return { hours: diffInHours, cost };
  };

  const { hours, cost } = calculateDuration();

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
      <div className={styles["motorcycle-card-firstContainer"]}>
        <div className={styles.slider}>
          <div className={styles["slider-mainImage"]}>
            <img
              src={`../../${images[currentIndex]}`}
              alt={`Main Slide ${currentIndex + 1}`}
            />
          </div>
          <div className={styles["slider-thumbnails"]}>
            {images.slice(-3).map((img, index) => (
              <img
                key={index}
                src={`../../${img}`}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={index === currentIndex ? styles.active : ''}
              />
            ))}
          </div>
          <div className={styles["slider-controls"]}>
            <button className={styles.navButton} onClick={prevSlide}>
              <GrPrevious />
            </button>
            <button className={styles.navButton} onClick={nextSlide}>
              <GrNext />
            </button>
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
                value={cost.toFixed(2)}
                readOnly
                placeholder="Total cost"
              />
            </div>
          </div>
        </div>
      </div>

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
