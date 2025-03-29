import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import MotoCardsGrid from '../components/MotoCardsGrid/MotoCardsGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import motocyclesConsts from "../constants/MotocyclesConsts"
import carsConsts from "../constants/CarsConsts"
import "./pages.css"

function MotoHomePage() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || "",
    maxPrice: searchParams.get('maxPrice') || "",
    type: searchParams.get('type') || "motocycles"
  });

  const getFilteredList = () => {
    const sourceList = filters.type === "motocycles" ? motocyclesConsts : carsConsts;
    
    return sourceList.filter(item => {
      const matchesSearch = !filters.search.trim() || 
        item.name.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesPrice = !filters.maxPrice.trim() || 
        Number(item.pricePerHour) <= Number(filters.maxPrice);

      return matchesSearch && matchesPrice;
    });
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  return (
    <div className="page-container">
      <SearchBar 
        onChange={(value) => handleFilterChange('search', value)}
        onChangeType={(value) => handleFilterChange('type', value)}
        onSetMaxPrice={(value) => handleFilterChange('maxPrice', value)}
      />
      <div className="content">
        <MotoCardsGrid 
          list={getFilteredList()} 
          type={filters.type}
        />
      </div>
    </div>
  )
}

export default MotoHomePage