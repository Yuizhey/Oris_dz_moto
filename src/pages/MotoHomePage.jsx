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

  return (
    <div className="page-container">
      <Navbar />
      <SearchBar onChange={handleSearch} onChangeType={handleChangeType}/>
      <div className="content">
        <MotoCardsGrid list={currentTypeOfList === 'motocycles' ? filteredMotocycleList : filteredCarsList} />
      </div>
      <Footer />
    </div>
  )
}

export default MotoHomePage