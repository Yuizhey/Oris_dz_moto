import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MotoCardsGrid from '../components/MotoCardsGrid/MotoCardsGrid';
import SearchBar from '../components/SearchBar/SearchBar';
import "./pages.css";

function MotoHomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || "",
    maxPrice: searchParams.get('maxPrice') || "",
    type: searchParams.get('type') || "motorcycles"
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Определяем, есть ли активные фильтры
  const hasFilters = filters.search || filters.maxPrice;

  // Формирование URL с параметрами
  const buildApiUrl = () => {
    const baseUrl = filters.type === "motorcycles" 
      ? "http://www.petrov.somee.com/api/api/Motorcycle" 
      : "http://www.petrov.somee.com/api/api/Car";
    
    // Если есть фильтры - добавляем /filtered и параметры
    if (hasFilters) {
      const params = new URLSearchParams();
      if (filters.search) params.append('search', filters.search);
      if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
      return `${baseUrl}/filtered?${params.toString()}`;
    }
    
    // Если фильтров нет - простой GET запрос
    return baseUrl;
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

  const handleAddVehicle = () => {
    navigate('/addnewvehiclepage');
  };

  if (loading) return <div className="page-container">Loading...</div>;

  return (
    <div className="page-container">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        padding: '20px'
      }}>
        <button 
          onClick={handleAddVehicle}
          style={{
            padding: '10px 20px',
            backgroundColor: '#666',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#777'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#666'}
        >
          Сдать своё транспортное средство
        </button>
      </div>
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