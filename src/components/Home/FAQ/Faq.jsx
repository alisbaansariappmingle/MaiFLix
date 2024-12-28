import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How can I hire a housemaid/babysitter/cook from Maiflix?',
      answer: 'You can hire domestic help through our simple process: Fill out the requirement form, browse through verified profiles, schedule interviews, and select your preferred candidate. Our team will assist you throughout the process.'
    },
    {
      question: 'What if I am not satisfied with the services?',
      answer: 'We have a satisfaction guarantee policy. If you are not satisfied, you can report your concerns within the first week. We\'ll either provide a replacement or process a refund according to our terms.'
    },
    {
      question: 'How much will a cook/maid/babysitter cost in Delhi NCR?',
      answer: 'The costs vary based on requirements, experience, and working hours. Typically, rates range from ₹12,000 to ₹25,000 per month for full-time help. Contact us for a detailed quote.'
    },
    {
      question: 'Why do your services seem more expensive than other helpers in the market?',
      answer: 'Our prices reflect the quality and reliability we offer. All our staff undergo thorough background checks, training, and are professionally managed. We ensure compliance with labor laws and provide insurance coverage.'
    },
    {
      question: 'Is a maid/cook/babysitter from Maiflix reliable?',
      answer: 'Yes, we ensure reliability through strict verification processes, including background checks, skill assessment, and reference verification. We maintain ongoing quality control and provide support throughout the service period.'
    },
    {
      question: 'Is it safe to hire a maid/cook/babysitter during the pandemic?',
      answer: 'We follow all COVID-19 safety protocols. Our staff is regularly tested, vaccinated, and trained in safety measures. We maintain strict hygiene standards and provide safety equipment as needed.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto p-6 sm:p-8 md:p-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 px-4 sm:px-6 lg:px-9">FAQs</h1>
      <div className="space-y-4 p-0 sm:p-6 md:p-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-800 text-sm sm:text-base">{faq.question}</span>
              {openIndex === index ? (
                <FaAngleUp className="w-5 h-5 text-gray-600" />
              ) : (
                <FaAngleDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === index ? 'max-h-48 py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
