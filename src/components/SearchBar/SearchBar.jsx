import React, { useState } from 'react'
import styles from "./SeacrhBar.module.css";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(event){
    const value = event.target.value;
    setSearchValue(value);
    props.onChange(value);
  }

  function handleChangeType(event){
    props.onChangeType(event.target.value)
  }

  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search" className={styles.searchInput} onChange={handleSearch}/>
      <button className={styles.dropdownButton}>Price</button>
      <button className={styles.dropdownButton}>Time Duration</button>
      <button className={styles.dropdownButton}>Brand</button>
      <select className={styles.dropdownButton} onChange={handleChangeType}>
        <option value="motocycles">Motocycles</option>
        <option value="cars">Cars</option>
      </select>
    </div>
  )
}

export default SearchBar