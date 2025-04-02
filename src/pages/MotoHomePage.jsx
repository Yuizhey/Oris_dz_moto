import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MotoCardsGrid from '../components/MotoCardsGrid/MotoCardsGrid';
import SearchBar from '../components/SearchBar/SearchBar';
import "./pages.css";

function MotoHomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || "",
    maxPrice: searchParams.get('maxPrice') || "",
    type: searchParams.get('type') || "motorcycles"
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Формирование URL с параметрами
  const buildApiUrl = () => {
    const baseUrl = filters.type === "motorcycles" 
      ? "http://localhost:5101/api/Motorcycle/filtered" 
      : "http://localhost:5101/api/Car/filtered";
    
    const params = new URLSearchParams();
    if (filters.search) params.append('search', filters.search);
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
    
    return `${baseUrl}?${params.toString()}`;
  };

  // Загрузка данных при изменении фильтров
  useEffect(() => {
    setLoading(true);
    fetch(buildApiUrl())
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
    
    // Обновляем URL в браузере
    setSearchParams({
      search: filters.search,
      maxPrice: filters.maxPrice,
      type: filters.type
    });
  }, [filters.search, filters.maxPrice, filters.type]);

  const handleSearchChange = (value) => {
    setFilters(prev => ({ ...prev, search: value }));
  };

  const handleTypeChange = (value) => {
    setFilters(prev => ({ ...prev, type: value }));
  };

  const handleMaxPriceChange = (value) => {
    setFilters(prev => ({ ...prev, maxPrice: value }));
  };

  if (loading) return <div className="page-container">Loading...</div>;

  return (
    <div className="page-container">
      <SearchBar 
        searchValue={filters.search}
        typeValue={filters.type}
        maxPriceValue={filters.maxPrice}
        onSearchChange={handleSearchChange}
        onTypeChange={handleTypeChange}
        onMaxPriceChange={handleMaxPriceChange}
      />
      <div className="content">
        <MotoCardsGrid 
          list={data} 
          type={filters.type}
        />
      </div>
    </div>
  );
}

export default MotoHomePage;