import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from "./SeacrhBar.module.css";

function SearchBar({ 
  searchValue, 
  typeValue, 
  maxPriceValue, 
  onSearchChange, 
  onTypeChange, 
  onMaxPriceChange 
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(event) {
    const value = event.target.value;
    setSearchParams(prev => {
      prev.set('search', value);
      return prev;
    });
    onSearchChange(value);
  }

  function handleChangeType(event) {
    const value = event.target.value;
    setSearchParams(prev => {
      prev.set('type', value);
      return prev;
    });
    onTypeChange(value);
  }

  function handleMaxPrice(event) {
    const value = event.target.value;
    setSearchParams(prev => {
      prev.set('maxPrice', value);
      return prev;
    });
    onMaxPriceChange(value);
  }

  return (
    <div className={styles.searchBar}>
      <input 
        type="text" 
        value={searchValue}
        placeholder="Search" 
        className={styles.searchInput} 
        onChange={handleSearch}
      />
      <input 
        type="text" 
        value={maxPriceValue}
        className={styles.searchInput} 
        onChange={handleMaxPrice} 
        placeholder='Set max price'
      />
      <button className={styles.dropdownButton}>Time Duration</button>
      <button className={styles.dropdownButton}>Brand</button>
      <select 
        className={styles.dropdownButton} 
        onChange={handleChangeType}
        value={typeValue}
      >
        <option value="motorcycles">Motorcycles</option>
        <option value="cars">Cars</option>
      </select>
    </div>
  )
}

export default SearchBar;