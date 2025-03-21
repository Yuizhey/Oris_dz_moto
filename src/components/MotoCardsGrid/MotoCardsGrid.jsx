import React from 'react'
import MotoCard from '../MotoCard/MotoCard'
import styles from "./MotoCardsGrid.module.css"

function MotoCardsGrid(props) {
  
  return (
    <div className={styles.motoCardsGrid}>
        {props.list.map((item) => (
          <MotoCard motocycle={item} key={item.id} type={props.type}/>
        ))}
    </div>
  )
}

export default MotoCardsGrid