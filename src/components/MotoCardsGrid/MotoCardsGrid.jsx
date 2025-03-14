import React from 'react'
import MotoCard from '../MotoCard/MotoCard'
import styles from "./MotoCardsGrid.module.css"

function MotoCardsGrid() {
  return (
    <div className={styles.motoCardsGrid}>
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
        <MotoCard imagePath="public/images/moto.png" name="CBR" />
    </div>
  )
}

export default MotoCardsGrid