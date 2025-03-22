import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import MotoCardsGrid from '../components/MotoCardsGrid/MotoCardsGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import Footer from '../components/Footer/Footer'
import motocyclesConsts from "../constants/MotocyclesConsts"
import carsConsts from "../constants/CarsConsts"
import "./pages.css"


function MotoHomePage() {
  const [filteredMotocycleList, setFilteredMotocycleList] = useState(motocyclesConsts);
  const [filteredCarsList, setFilteredCarsList] = useState(carsConsts);
  const [currentTypeOfList, setCurrentTypeOfList] = useState("motocycles");

  function handleSearch(query) {
    const lowerQuery = query.toLowerCase();
    const listToFilter = currentTypeOfList ==="motocycles" ? motocyclesConsts : carsConsts;
    
    if (query.trim() === "") {
      setFilteredMotocycleList(motocyclesConsts); 
      setFilteredCarsList(carsConsts);
    } else {
      const filtered = listToFilter.filter(item => 
        item.name.toLowerCase().includes(lowerQuery)
      );
      if (currentTypeOfList ==="motocycles"){
        setFilteredMotocycleList(filtered);
      }else{
        setFilteredCarsList(filtered);
      }
    }
  }

  function handleChangeType(type){
    setCurrentTypeOfList(type);
  };

  function handleMaxPrice(value){
    const listToFilter = currentTypeOfList ==="motocycles" ? motocyclesConsts : carsConsts;
    const trimmedValue = String(value).trim();
    if (!trimmedValue && trimmedValue !== "0") {
      setFilteredMotocycleList(motocyclesConsts); 
      setFilteredCarsList(carsConsts);
    } else {
      const filtered = listToFilter.filter(item => 
        Number(item.pricePerHour) <= value
      );
      if (currentTypeOfList ==="motocycles"){
        setFilteredMotocycleList(filtered);
      }else{
        setFilteredCarsList(filtered);
      }
    }
  };

  return (
    <div className="page-container">
      <SearchBar onChange={handleSearch} onChangeType={handleChangeType} onSetMaxPrice={handleMaxPrice}/>
      <div className="content">
        <MotoCardsGrid list={currentTypeOfList === 'motocycles' ? filteredMotocycleList : filteredCarsList} type={currentTypeOfList}/>
      </div>
    </div>
  )
}

export default MotoHomePage