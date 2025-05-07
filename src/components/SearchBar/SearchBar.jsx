import React, { useState, useEffect, useCallback } from 'react';
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
  const [localSearchValue, setLocalSearchValue] = useState(searchValue);
  const [localMaxPriceValue, setLocalMaxPriceValue] = useState(maxPriceValue);
  const [isLoading, setIsLoading] = useState(false);

  // Debounce для поиска
  const debouncedSearch = useCallback(
    (value) => {
      const timer = setTimeout(() => {
        setSearchParams(prev => {
          prev.set('search', value);
          return prev;
        });
        onSearchChange(value);
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    },
    [onSearchChange, setSearchParams]
  );

  // Debounce для максимальной цены
  const debouncedMaxPrice = useCallback(
    (value) => {
      const timer = setTimeout(() => {
        setSearchParams(prev => {
          prev.set('maxPrice', value);
          return prev;
        });
        onMaxPriceChange(value);
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    },
    [onMaxPriceChange, setSearchParams]
  );

  // Обработчик изменения поискового запроса
  function handleSearch(event) {
    const value = event.target.value;
    setLocalSearchValue(value);
    setIsLoading(true);
    debouncedSearch(value);
  }

  // Обработчик изменения типа
  function handleChangeType(event) {
    const value = event.target.value;
    setSearchParams(prev => {
      prev.set('type', value);
      return prev;
    });
    onTypeChange(value);
  }

  // Обработчик изменения максимальной цены
  function handleMaxPrice(event) {
    const value = event.target.value;
    setLocalMaxPriceValue(value);
    setIsLoading(true);
    debouncedMaxPrice(value);
  }

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInputWrapper}>
        <input 
          type="text" 
          value={localSearchValue}
          placeholder="Search" 
          className={styles.searchInput} 
          onChange={handleSearch}
        />
        {isLoading && <div className={styles.loadingIndicator}></div>}
      </div>
      <div className={styles.searchInputWrapper}>
        <input 
          type="text" 
          value={localMaxPriceValue}
          className={styles.searchInput} 
          onChange={handleMaxPrice} 
          placeholder='Set max price'
        />
        {isLoading && <div className={styles.loadingIndicator}></div>}
      </div>
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