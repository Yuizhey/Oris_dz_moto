import React from 'react'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import images from "../../constants/LocalServiceSectionImages.js"
import styles from "./LocalServiceSection.module.css"

function LocalServiceSection() {
  return (
    <div className={styles.container}>
        <h1 className={styles["container-title"]}>Local Service We Provide</h1>
        <div className={styles["container-images"]}>
            <button className="button"><GrPrevious /></button>
            {images.slice(-5).map(item=> <img src={item.path} className={styles.image}/>)}
            <button className="button"><GrNext /></button>
        </div>
    </div>
  )
}

export default LocalServiceSection