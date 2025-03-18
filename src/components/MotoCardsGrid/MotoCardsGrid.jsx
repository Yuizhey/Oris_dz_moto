import React from 'react'
import MotoCard from '../MotoCard/MotoCard'
import styles from "./MotoCardsGrid.module.css"
import motocyclesConsts from "../../MotocyclesConsts"

function MotoCardsGrid() {
  
  return (
    <div className={styles.motoCardsGrid}>
        {motocyclesConsts.map(item => (
          <MotoCard imagePath={item.imagePath} name={item.name} />
        ))}
    </div>
  )
}

export default MotoCardsGrid