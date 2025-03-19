import React from 'react'
import MotoCard from '../MotoCard/MotoCard'
import styles from "./MotoCardsGrid.module.css"

function MotoCardsGrid(props) {
  
  return (
    <div className={styles.motoCardsGrid}>
        {props.list.map((item, index) => (
          <MotoCard motocycle={item} key={index}/>
        ))}
    </div>
  )
}

export default MotoCardsGrid