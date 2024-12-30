import React from 'react'

const Disclaimer = () => {
  return (
    <>
     {/* Disclaimer */}
     <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-5">Disclaimer</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>This salary is approximate and is subject to change, considering tasks and situations.</li>
          <li>
            It includes two paid leaves, which can be encashed if not taken by the worker.
          </li>
          <li>Conveyance charges are not included in company charges.</li>
          <li>
            The amount you are paying to the company are company charges only. It is not the salary of the staff allocated to your place. The salary of the staff will be paid by you only in any circumstances. (Salary will be calculated according to the days they have stayed and catered to the services to you. Replacement will only be provided once you pay the salary of your previous staff.)
          </li>
          <li>Washroom cleaning and dog care are excluded.</li>
          <li>
            In a 10-hour shift, you must provide the staff with one meal (i.e., lunch). In a 24-hour shift, three meals and sleeping arrangements for the person are your responsibility.
          </li>
        </ul>
    </>
  )
}

export default Disclaimer