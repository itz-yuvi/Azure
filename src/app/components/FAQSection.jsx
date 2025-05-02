'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What time is check-in and check-out?',
    answer: 'Check-in is from 2 PM, and check-out is by 11 AM. Early check-ins and late check-outs can be arranged based on availability.',
  },
  {
    question: 'Is breakfast included in the stay?',
    answer: 'Yes, a complimentary gourmet breakfast is served daily at our ocean-view restaurant.',
  },
  {
    question: 'Are pets allowed at the resort?',
    answer: 'Yes, we welcome pets! Please inform us in advance to ensure we make special arrangements for your furry companion.',
  },
  {
    question: 'Do you offer airport transfers?',
    answer: 'Yes, luxury airport transfers can be arranged upon request. Charges may apply depending on the package.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
              >
                <span className="text-lg text-gray-800 font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="px-6 pb-5 text-gray-600 text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
