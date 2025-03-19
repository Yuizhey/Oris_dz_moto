import React from 'react'
import styles from "./MotoCard.module.css"
import { useNavigate } from 'react-router-dom'

function MotoCard(props) {

  const navigate = useNavigate();

  function goToIndividualMotoPage() {
    navigate(`/motoindividualpage/${props.motocycle.id}`);
  }

  return (
    <div className={styles.card} onClick={goToIndividualMotoPage}>
        <img src={props.motocycle.imagePath} alt="" className={styles.cardImage} />
        <h3 className={styles.cardName}>{props.motocycle.name}</h3>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Seats: {props.motocycle.characteristics.seats}</p>
          <p className={styles.characteristic}>Horsepower: {props.motocycle.characteristics.horsepower}</p>
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Fuel: {props.motocycle.characteristics.fuel}</p>
          <p className={styles.characteristic}>Engine: {props.motocycle.characteristics.engine}</p>
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Front Brake: {props.motocycle.characteristics.frontBrake}</p>
          <p className={styles.characteristic}>Stroke: {props.motocycle.characteristics.stroke}</p>   
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Gear Box: {props.motocycle.characteristics.gearBox}</p>
          <p className={styles.characteristic}>Overall Mileage: {props.motocycle.characteristics.mileage}</p>   
        </div>
        <div className={styles.cardRentInfo}>
            <div className={styles.rentInfoPrice}>
              <p className={styles.pricePerHour}>Per Hour</p>
              <p className={styles.priceInDollars}>${props.motocycle.pricePerHour}</p>
            </div>
            <button className={styles.rentInfoButton} onClick={(e) => e.stopPropagation()}>Rent Bike</button>
        </div>
    </div>
  )
}

export default MotoCard
