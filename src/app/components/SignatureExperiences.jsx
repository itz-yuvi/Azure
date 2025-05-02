'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    icon: '💆‍♀️',
    title: 'Spa & Wellness',
    description: 'Rejuvenate with world-class spa treatments in a serene setting.',
  },
  {
    icon: '🍷',
    title: 'Fine Dining',
    description: 'Savor gourmet cuisine crafted by top chefs with coastal flair.',
  },
  {
    icon: '🏖️',
    title: 'Private Beach',
    description: 'Escape to exclusive shores with crystal-clear waters and privacy.',
  },
  {
    icon: '🛥️',
    title: 'Marine Tours',
    description: 'Discover the reef and marine life on guided luxury tours.',
  },
];

export default function SignatureExperiences() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-12"
        >
          Signature Experiences
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transform transition duration-500 hover:scale-105 cursor-pointer"
            >
              <div className="text-5xl mb-6">{exp.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{exp.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
