import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import MotoCycleIndividualCard from '../components/MotocycleIndividualCard/MotoCycleIndividualCard'
import { useParams } from 'react-router-dom'

function MotoIndividualPage() {
  const {id} = useParams();
  return (
    <>
        <Navbar />
        <MotoCycleIndividualCard id={id}/>
        <Footer />
    </>
  )
}

export default MotoIndividualPage