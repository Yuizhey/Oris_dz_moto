import React, { useState } from 'react'
import styles from "./SeacrhBar.module.css";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(event){
    const value = event.target.value;
    setSearchValue(value);
    props.onChange(value);
  }

  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search" className={styles.searchInput} onChange={handleSearch}/>
      <button className={styles.dropdownButton}>Price</button>
      <button className={styles.dropdownButton}>Time Duration</button>
      <button className={styles.dropdownButton}>Brand</button>
      <button className={styles.searchButton}>Filter</button>
    </div>
  )
}

export default SearchBar