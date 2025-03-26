import React from 'react'
import LocalServiceSection from '../components/LocalServiceSection/LocalServiceSection'
import CustomerSayingSection from '../components/CustomerSayingSection/CustomerSayingSection'
import RentSection from '../components/RentSection/RentSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection/WhyChooseUsSection'
import Navbar from '../components/Navbar/Navbar'

function PresentationPage() {
  return (
    <div>
        <Navbar variant="presentation" />
        <RentSection />
        <WhyChooseUsSection />
        <CustomerSayingSection />
        <LocalServiceSection />
    </div>
  )
}

export default PresentationPage