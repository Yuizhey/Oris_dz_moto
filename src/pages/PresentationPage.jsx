import React from 'react'
import LocalServiceSection from '../components/LocalServiceSection/LocalServiceSection'
import CustomerSayingSection from '../components/CustomerSayingSection/CustomerSayingSection'
import RentSection from '../components/RentSection/RentSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection/WhyChooseUsSection'

function PresentationPage() {
  return (
    <div>
        <RentSection />
        <WhyChooseUsSection />
        <CustomerSayingSection />
        <LocalServiceSection />
    </div>
  )
}

export default PresentationPage