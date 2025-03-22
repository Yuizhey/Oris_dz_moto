import React, { useState } from 'react'
import styles from "./SeacrhBar.module.css";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const [maxPriceValue, setMaxPriceValue] = useState(0);

  function handleSearch(event){
    const value = event.target.value;
    setSearchValue(value);
    props.onChange(value);
  }

  function handleChangeType(event){
    props.onChangeType(event.target.value)
  }

  function handleMaxPrice(event){
    const value = event.target.value;
    setMaxPriceValue(value);
    props.onSetMaxPrice(value);
  }

  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search" className={styles.searchInput} onChange={handleSearch}/>
      <input type="text" className={styles.searchInput} onChange={handleMaxPrice} placeholder='Set max price'/>
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