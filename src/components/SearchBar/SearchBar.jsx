import React, { useState, useCallback, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from "./SeacrhBar.module.css";

const SearchBar = memo(({ 
  searchValue, 
  typeValue, 
  maxPriceValue, 
  onSearchChange, 
  onTypeChange, 
  onMaxPriceChange 
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [localSearchValue, setLocalSearchValue] = useState(searchValue);
  const [localMaxPriceValue, setLocalMaxPriceValue] = useState(maxPriceValue);
  const [isLoading, setIsLoading] = useState(false);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchParams(prev => {
        prev.set('search', value);
        return prev;
      });
      onSearchChange(value);
      setIsLoading(false);
    }, 800),
    [onSearchChange, setSearchParams]
  );

  const debouncedMaxPrice = useCallback(
    debounce((value) => {
      setSearchParams(prev => {
        prev.set('maxPrice', value);
        return prev;
      });
      onMaxPriceChange(value);
      setIsLoading(false);
    }, 800),
    [onMaxPriceChange, setSearchParams]
  );

  const handleSearch = useCallback((event) => {
    const value = event.target.value;
    setLocalSearchValue(value);
    setIsLoading(true);
    debouncedSearch(value);
  }, [debouncedSearch]);

  const handleMaxPrice = useCallback((event) => {
    const value = event.target.value;
    setLocalMaxPriceValue(value);
    setIsLoading(true);
    debouncedMaxPrice(value);
  }, [debouncedMaxPrice]);

  const handleChangeType = useCallback((event) => {
    setSearchParams(prev => {
      prev.set('type', event.target.value);
      return prev;
    });
    onTypeChange(event.target.value);
  }, [onTypeChange, setSearchParams]);

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
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;