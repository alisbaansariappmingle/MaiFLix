import React from 'react'
import TermConditions from './TermConditions'
import BookingProcess from './BookingProcess'
import ShippingPolicy from './ShippingPolicy'
import ReturnPolicy from './ReturnPolicy'
import Disclaimer from './Disclaimer'
import PrivacyPolicy from './PrivacyPolicy'


const Policy = () => {
  return (
    <>
    <div>
    <div className="w-full bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
      <div className=" mx-auto bg-white shadow-md rounded-lg p-6 border">
        {/* Booking Process */}
        <h1 className="text-3xl font-semibold text-[#ff8800] text-center mb-4">Terms & Conditions</h1>
          <TermConditions/>          
          <ShippingPolicy/>
          <ReturnPolicy/>
          <PrivacyPolicy/>
          <BookingProcess/>
          <Disclaimer/>

        </div>
        </div>
      </div>
    </>
  )
}

export default Policy