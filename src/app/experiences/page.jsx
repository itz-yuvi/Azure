'use client';

import { motion } from 'framer-motion';
import {
  FaHiking,
  FaWineGlassAlt,
  FaTree,
  FaCampground,
  FaUmbrellaBeach,
  FaUtensils,
  FaSpa,
  FaBicycle,
  FaCameraRetro,
  FaSkiing,
  FaSwimmingPool,
  FaLeaf
} from 'react-icons/fa';

const experienceList = [
  {
    icon: <FaHiking size={40} className="text-green-700" />,
    title: 'Guided Nature Treks',
    description: 'Explore coastal trails with expert naturalists and breathtaking views.',
  },
  {
    icon: <FaWineGlassAlt size={40} className="text-rose-600" />,
    title: 'Wine Tasting Evenings',
    description: 'Savor award-winning local wines paired with gourmet cuisine.',
  },
  {
    icon: <FaTree size={40} className="text-emerald-600" />,
    title: 'Rainforest Meditation',
    description: 'Connect with inner peace amidst lush green serenity and birdsong.',
  },
  {
    icon: <FaCampground size={40} className="text-yellow-600" />,
    title: 'Luxury Glamping',
    description: 'Experience the wilderness with style and comfort under the stars.',
  },
  {
    icon: <FaUmbrellaBeach size={40} className="text-blue-600" />,
    title: 'Private Beach Lounges',
    description: 'Relax in exclusive beachfront areas with personalized service.',
  },
  {
    icon: <FaUtensils size={40} className="text-orange-500" />,
    title: 'Chef’s Table Experience',
    description: 'Enjoy a private dining journey with our executive chef.',
  },
  {
    icon: <FaSpa size={40} className="text-pink-500" />,
    title: 'Luxury Spa Rituals',
    description: 'Rejuvenate with healing massages and aromatic therapies.',
  },
  {
    icon: <FaBicycle size={40} className="text-indigo-500" />,
    title: 'Scenic Bike Rides',
    description: 'Cycle through tranquil trails with curated picnic stops.',
  },
  {
    icon: <FaCameraRetro size={40} className="text-gray-700" />,
    title: 'Photography Walks',
    description: 'Capture the golden hour guided by professional photographers.',
  },
  {
    icon: <FaSkiing size={40} className="text-sky-600" />,
    title: 'Winter Sports & Skiing',
    description: 'Indulge in snowy adventures with expert instructors.',
  },
  {
    icon: <FaSwimmingPool size={40} className="text-cyan-500" />,
    title: 'Infinity Pool Soaks',
    description: 'Unwind in warm waters overlooking panoramic landscapes.',
  },
  {
    icon: <FaLeaf size={40} className="text-lime-600" />,
    title: 'Organic Farm Tours',
    description: 'Learn sustainable practices and pick fresh organic produce.',
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

export default function Experiences() {
  return (
    <section className="bg-white min-h-screen px-6 md:px-20 py-24 text-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-serif font-bold text-center mb-8"
        >
          Signature Experiences
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          Discover hand-curated experiences that connect you with nature, luxury, and culture in unforgettable ways.
        </motion.p>

        {/* Experience Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experienceList.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
