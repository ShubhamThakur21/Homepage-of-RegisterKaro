/* eslint-disable react/prop-types */

import  { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Can I recover deleted files from desktop with this software?',
    answer: 'Yes, this software is designed to recover deleted files from desktop systems efficiently.'
  },
  {
    id: 2,
    question: 'Can I recover deleted files from desktop with this software?',
    answer: 'Yes, this software is designed to recover deleted files from desktop systems efficiently.'
  },
  {
    id: 3,
    question: 'Can I recover deleted files from desktop with this software?',
    answer: 'Yes, this software is designed to recover deleted files from desktop systems efficiently.'
  },
  {
    id: 4,
    question: 'Can I recover deleted files from desktop with this software?',
    answer: 'Yes, this software is designed to recover deleted files from desktop systems efficiently.'
  },
  {
    id: 5,
    question: 'Can I recover deleted files from desktop with this software?',
    answer: 'Yes, this software is designed to recover deleted files from desktop systems efficiently.'
  },
];

const FAQCard = ({ faq, isOpen, onClick }) => {
  return (
    <div className="bg-white text-gray-900 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow border-l-4 border-gradient-to-r from-orange-500 to-blue-500 cursor-pointer" onClick={onClick}>
      <div className="flex justify-between items-center">
        <p className="text-md font-medium">{faq.question}</p>
        <span className="text-gray-400 text-lg">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleToggle = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-gray-50 py-10 px-10 sm:px-20 lg:px-40">
      <h1 className="text-center text-2xl font-bold text-orange-500 mb-4">FAQ</h1>
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-8">Frequent Ask Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <FAQCard
            key={faq.id}
            faq={faq}
            isOpen={openFAQ === faq.id}
            onClick={() => handleToggle(faq.id)}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded inline-flex items-center">
          Show more <span className="ml-2">&#x2794;</span>
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
