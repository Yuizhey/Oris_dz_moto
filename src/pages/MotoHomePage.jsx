import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MotoCardsGrid from '../components/MotoCardsGrid/MotoCardsGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import Footer from '../components/Footer/Footer'

function MotoHomePage() {
  return (
    <>
        <Navbar />
        <SearchBar />
        <MotoCardsGrid/>
        <Footer />
    </>
  )
}

export default MotoHomePage