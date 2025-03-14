import React from 'react'
import styles from "./MotoCard.module.css"

function MotoCard(props) {
  return (
    <div className={styles.motoCard}>
        <img src={props.imagePath} alt="" className={styles.motoCardImage} />
        <h3 className={styles.motoCardName}>{props.name}</h3>
        <div className={styles.motoCardInfo}>
          <p className="motoCharacteristic">Seats:2</p>
          <p className="motoCharacteristic">Horsepower:500</p>
        </div>
        <div className={styles.motoCardInfo}>
          <p className="motoCharacteristic">Fuel:Petrol</p>
          <p className="motoCharacteristic">Engine:3000</p>
        </div>
        <div className={styles.motoCardInfo}>
          <p className="motoCharacteristic">Front Brake:Disc</p>
          <p className="motoCharacteristic">Stroke:58.7 Mm</p>   
        </div>
        <div className={styles.motoCardInfo}>
          <p className="motoCharacteristic">Gear Box:6-Speed</p>
          <p className="motoCharacteristic">Overall Mileage:40 Kmpl</p>   
        </div>
        <div className={styles.motoCardRentInfo}>
            <div className="motoCardRentInfo-price">
              <p className="pricePerHour">Per Hours</p>
              <p className="priceInDollars">56$</p>
            </div>
            <button className="motoCardRentInfo-button">Rent Bike</button>
        </div>
    </div>
  )
}

export default MotoCard