import React from 'react'
import styles from "./MotoCard.module.css"
import { useNavigate } from 'react-router-dom'

function MotoCard(props) {

  const navigate = useNavigate();
  const { id, imagePath, name, characteristics, pricePerHour } = props.motocycle;
  const { seats, horsepower, fuel, engine } = characteristics;

  const isMotocycle = props.type === "motocycles";

  function goToIndividualMotoPage() {
    navigate(`/motoindividualpage/${props.motocycle.id}`,{
      state:{
        item: props.motocycle,
        type:props.type
      }
    });
  }

  return (
    <div className={styles.card} onClick={goToIndividualMotoPage}>
      <img src={props.motocycle.imagePath} alt="" className={styles.cardImage} />
      <h3 className={styles.cardName}>{props.motocycle.name}</h3>
      <div className={styles.cardInfo}>
        <p className={styles.characteristic}>Seats: {seats}</p>
        <p className={styles.characteristic}>Horsepower: {horsepower}</p>
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.characteristic}>Fuel: {fuel}</p>
        <p className={styles.characteristic}>Engine: {engine}</p>
      </div>
      {isMotocycle? (
        <>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Front Brake: {characteristics.frontBrake}</p>
          <p className={styles.characteristic}>Stroke: {characteristics.stroke}</p>
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Gear Box: {characteristics.gearBox}</p>
          <p className={styles.characteristic}>Mileage: {characteristics.mileage}</p>
        </div>
        </>
      ) : (
        <>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Doors: {characteristics.doors}</p>
          <p className={styles.characteristic}>Drive: {characteristics.drive}</p>
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Type: {characteristics.type}</p>
          <p className={styles.characteristic}>Luggage: {characteristics.luggage}</p>
        </div>
        </>
      )}
      <div className={styles.cardRentInfo}>
        <div className={styles.rentInfoPrice}>
          <p className={styles.pricePerHour}>Per Hour</p>
          <p className={styles.priceInDollars}>${pricePerHour}</p>
        </div>
        <button className={styles.rentInfoButton} onClick={(e) => e.stopPropagation()}>
          Rent {isMotocycle ? "Bike" : "Car"}
        </button>
      </div>
    </div>
  )
}

export default MotoCard
