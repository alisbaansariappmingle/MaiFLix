import React from 'react'

const TermConditions = () => {
  return (
    <>
     {/* Terms & Conditions */}
     <h2 className="text-xl font-semibold text-gray-800 mb-4">Terms & Conditions</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            All bookings are subject to availability and confirmation of payment.
          </li>
          <li>
            The company reserves the right to refuse services under certain circumstances.
          </li>
          <li>
            The user agrees to provide accurate information for service execution.
          </li>
          <li>
            Misuse of services or breach of terms may result in cancellation without refund.
          </li>
        </ul>
    </>
  )
}

export default TermConditions