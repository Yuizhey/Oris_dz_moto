import React from 'react'
import MotoCycleIndividualCard from '../components/MotocycleIndividualCard/MotoCycleIndividualCard'
import { useLocation } from 'react-router-dom'
import "./pages.css"

function MotoIndividualPage() {
  const { state } = useLocation();
  const { item, type } = state || {}; 

  if (!item) {
    return <div>No data found</div>; 
  }

  return (
    <div className="page-container">
      <div className="content">
        <MotoCycleIndividualCard motorcycle={item} type={type} />
      </div>
    </div>
  );
}

export default MotoIndividualPage