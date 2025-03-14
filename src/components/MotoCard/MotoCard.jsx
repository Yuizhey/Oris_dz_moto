import React from 'react'

function MotoCard(props) {
  return (
    <div>
        <img src={props.imagePath} alt="" className="motoCardImage" />
        <h3 className="motoCardName">props.name</h3>
        <div className="motoCardInfo-FirstLine">

        </div>
        <div className="motoCardInfo-SecondLine">
            
        </div>
        <div className="motoCardInfo-ThirdLine">
            
        </div>
        <div className="motoCardInfo-FourthLine">
            
        </div>
        <div className="motoCardRentInfo">
            <div className="motoCardRentInfo-price">
                
            </div>
            <button className="motoCardRentInfo-button">Rent Bike</button>
        </div>
    </div>
  )
}

export default MotoCard