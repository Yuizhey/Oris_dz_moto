import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import MotoCardsGrid from '../components/MotoCardsGrid/MotoCardsGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import Footer from '../components/Footer/Footer'
import motocyclesConsts from "../constants/MotocyclesConsts"

function MotoHomePage() {
  const [filteresMotocycleList, setFilteredMotocycleList] = useState(motocyclesConsts);

  function handleSearch(query) {
    const lowerQuery = query.toLowerCase();

    if (query.trim() === "") {
      setFilteredMotocycleList(motocyclesConsts); // Если строка пустая — сбрасываем фильтр
    } else {
      const filtered = motocyclesConsts.filter(item => 
        item.name.toLowerCase().includes(lowerQuery)
      );
      setFilteredMotocycleList(filtered);
    }
  }

  return (
    <>
        <Navbar />
        <SearchBar onChange={handleSearch}/>
        <MotoCardsGrid list={filteresMotocycleList}/>
        <Footer />
    </>
  )
}

export default MotoHomePage