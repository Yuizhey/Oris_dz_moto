import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import MotoCardsGrid from '../components/MotoCardsGrid/MotoCardsGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import Footer from '../components/Footer/Footer'
import motocyclesConsts from "../constants/MotocyclesConsts"
import "./pages.css"

function MotoHomePage() {
  const [filteredMotocycleList, setFilteredMotocycleList] = useState(motocyclesConsts);

  function handleSearch(query) {
    const lowerQuery = query.toLowerCase();

    if (query.trim() === "") {
      setFilteredMotocycleList(motocyclesConsts); 
    } else {
      const filtered = motocyclesConsts.filter(item => 
        item.name.toLowerCase().includes(lowerQuery)
      );
      setFilteredMotocycleList(filtered);
    }
  }

  return (
    <div className="page-container">
      <Navbar />
      <SearchBar onChange={handleSearch} />
      <div className="content">
        <MotoCardsGrid list={filteredMotocycleList} />
      </div>
      <Footer />
    </div>
  )
}

export default MotoHomePage