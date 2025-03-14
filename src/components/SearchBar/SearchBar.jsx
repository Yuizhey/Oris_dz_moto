import React from 'react'
import styles from "./SeacrhBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search" className={styles.searchInput} />
      <button className={styles.dropdownButton}>Price</button>
      <button className={styles.dropdownButton}>Time Duration</button>
      <button className={styles.dropdownButton}>Brand</button>
      <button className={styles.searchButton}>Filter</button>
    </div>
  )
}

export default SearchBar