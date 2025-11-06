'use client';

import { useState } from 'react';
import type { FC } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'What does this app help me do?',
    answer: 'This is some dummy content for the answer. It will be replaced with the actual answer later.',
  },
  {
    question: 'Is my financial data safe and secure?',
    answer: 'This is some dummy content for the answer. It will be replaced with the actual answer later.',
  },
  {
    question: 'How do I set a monthly budget?',
    answer: 'This is some dummy content for the answer. It will be replaced with the actual answer later.',
  },
  {
    question: "What happens if I don't renew my subscription?",
    answer: 'This is some dummy content for the answer. It will be replaced with the actual answer later.',
  },
  {
    question: 'Does the app support international currencies?',
    answer: 'This is some dummy content for the answer. It will be replaced with the actual answer later.',
  },
  {
    question: 'Can I track shared expenses with family or roommates?',
    answer: 'This is some dummy content for the answer. It will be replaced with the actual answer later.',
  },
  {
    question: 'Is there a way to automate savings?',
    answer: 'This is some dummy content for the answer. It will be replaced with the actual answer later.',
  },
  {
    question: "Will my data be deleted if I cancel or don't renew?",
    answer: 'This is some dummy content for the answer. It will be replaced with the actual answer later.',
  },
  {
    question: 'Can I export my data before canceling?',
    answer: 'This is some dummy content for the answer. It will be replaced with the actual answer later.',
  },
];

const ArrowDownIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const NeoFaq: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#2a7aa9] min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-6xl text-white flex flex-col lg:flex-row lg:items-center lg:space-x-16">
        {/* FAQ Section */}
        <div className="w-full lg:w-2/3">
          <div className="mb-10">
            <h2 className="font-semibold" style={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: '24px', fontWeight: 600 }}>Frequently asked questions</h2>
            <h1 className="font-bold text-[#4fc3f7]" style={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: '36px', fontWeight: 'bold' }}>We hear you & we here for you!</h1>
          </div>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left py-3 border-b border-gray-400 focus:outline-none"
                >
                  <span
                    className="flex items-center"
                    style={{
                      fontFamily: "'Roboto Condensed', Arial, Helvetica, sans-serif",
                      fontWeight: 500,
                      fontSize: 18,
                      lineHeight: "1.3",
                    }}
                  >
                    <span className="mr-3">{index + 1}.</span>
                    <span className="hover:underline">{item.question}</span>
                  </span>
                  <ArrowDownIcon
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p
                    className="pt-2 pb-4 text-gray-200"
                    style={{
                      fontFamily: "'Roboto Condensed', Arial, Helvetica, sans-serif",
                      fontWeight: 500,
                      fontSize: 15,
                      lineHeight: "1.5",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="w-full lg:w-1/3 flex justify-center mt-12 lg:mt-0">
          <div className="bg-[#4fc3f7] p-8 rounded-2xl text-center w-full max-w-sm">
            <h3
              className="mb-4"
              style={{
                fontFamily: "'Roboto Condensed', Arial, Helvetica, sans-serif",
                fontWeight: 'bold',
                fontSize: 36,
                color: 'white',
                lineHeight: "1.1"
              }}
            >
              Couldn't find your problem?
            </h3>
            <button className="bg-[#2a7aa9] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#23668f] transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeoFaq;