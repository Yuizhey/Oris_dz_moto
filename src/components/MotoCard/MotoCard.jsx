import React from 'react'
import styles from "./MotoCard.module.css"
import { useNavigate } from 'react-router-dom'

function MotoCard(props) {

  const navigate = useNavigate();

  function goToIndividualMotoPage(){
    navigate("/motoindividualpage")
  }

  return (
    <div className={styles.card} onClick={goToIndividualMotoPage}>
        <img src={props.imagePath} alt="" className={styles.cardImage} />
        <h3 className={styles.cardName}>{props.name}</h3>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Seats:2</p>
          <p className={styles.characteristic}>Horsepower:500</p>
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Fuel:Petrol</p>
          <p className={styles.characteristic}>Engine:3000</p>
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Front Brake:Disc</p>
          <p className={styles.characteristic}>Stroke:58.7 Mm</p>   
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.characteristic}>Gear Box:6-Speed</p>
          <p className={styles.characteristic}>Overall Mileage:40 Kmpl</p>   
        </div>
        <div className={styles.cardRentInfo}>
            <div className={styles.rentInfoPrice}>
              <p className={styles.pricePerHour}>Per Hour</p>
              <p className={styles.priceInDollars}>$56</p>
            </div>
            <button className={styles.rentInfoButton} onClick={(e) => e.stopPropagation()}>Rent Bike</button>
        </div>
    </div>
  )
}

export default MotoCard
