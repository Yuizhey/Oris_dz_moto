import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from "./SeacrhBar.module.css";

function SearchBar(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || "");
  const [maxPriceValue, setMaxPriceValue] = useState(searchParams.get('maxPrice') || "");

  useEffect(() => {
    // Инициализация фильтров из URL при загрузке
    const search = searchParams.get('search');
    const maxPrice = searchParams.get('maxPrice');
    const type = searchParams.get('type');
    
    if (search) props.onChange(search);
    if (maxPrice) props.onSetMaxPrice(maxPrice);
    if (type) props.onChangeType(type);
  }, []);

  function handleSearch(event){
    const value = event.target.value;
    setSearchValue(value);
    setSearchParams(prev => {
      prev.set('search', value);
      return prev;
    });
    props.onChange(value);
  }

  function handleChangeType(event){
    const value = event.target.value;
    setSearchParams(prev => {
      prev.set('type', value);
      return prev;
    });
    props.onChangeType(value);
  }

  function handleMaxPrice(event){
    const value = event.target.value;
    setMaxPriceValue(value);
    setSearchParams(prev => {
      prev.set('maxPrice', value);
      return prev;
    });
    props.onSetMaxPrice(value);
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
        value={searchParams.get('type') || "motocycles"}
      >
        <option value="motocycles">Motocycles</option>
        <option value="cars">Cars</option>
      </select>
    </div>
  )
}

export default SearchBar