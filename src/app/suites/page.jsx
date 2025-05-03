'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const suiteList = [
  {
    image: '/assets/gallery1.jpeg',
    title: 'Ocean View Suite',
    description: 'A lavish suite offering breathtaking ocean views with a private balcony and modern amenities.',
    features: ['King-size Bed', 'Ocean View', 'Private Balcony', 'Luxury Amenities'],
  },
  {
    image: '/assets/gallery2.jpeg',
    title: 'Garden Retreat Suite',
    description: 'A tranquil suite nestled amidst lush greenery, featuring a spa-like bathroom and a private garden.',
    features: ['Rainfall Shower', 'Private Garden', 'Spa Bath', 'Floor-to-Ceiling Windows'],
  },
  {
    image: '/assets/gallery3.jpg',
    title: 'Executive Suite',
    description: 'Perfect for business travelers, with a spacious working area, coffee station, and premium furnishings.',
    features: ['Business Desk', 'Coffee Station', 'High-Speed Wi-Fi', 'Room Service'],
  },
  {
    image: '/assets/gallery4.jpg',
    title: 'Luxury Spa Suite',
    description: 'Indulge in a luxurious spa suite with a private jacuzzi, massage therapy area, and personalized services.',
    features: ['Private Jacuzzi', 'Massage Area', 'Luxury Spa Treatments', 'Customized Experience'],
  },
  {
    image: '/assets/gallery5.jpg',
    title: 'Presidential Suite',
    description: 'The ultimate in luxury, with an expansive living area, private chef, and 24/7 concierge service.',
    features: ['Private Chef', 'Expansive Living Area', '24/7 Concierge', 'Panoramic Views'],
  },
  {
    image: '/assets/gallery6.jpeg',
    title: 'Poolside Suite',
    description: 'Relax and unwind in a serene suite with a private pool, garden views, and all the luxury amenities.',
    features: ['Private Pool', 'Garden Views', 'Sun Loungers', 'Luxury Amenities'],
  },
  {
    image: '/assets/gallery7.jpg',
    title: 'Mountain View Suite',
    description: 'A suite with stunning mountain views, cozy interiors, and access to exclusive hiking trails.',
    features: ['Mountain Views', 'Private Balcony', 'Cozy Fireplace', 'Hiking Trails'],
  },
  {
    image: '/assets/gallery8.jpeg',
    title: 'Skyline Suite',
    description: 'Stay in a futuristic suite with panoramic city views, high-tech amenities, and luxurious interiors.',
    features: ['Panoramic City Views', 'Smart Home Technology', 'Modern Design', 'Private Balcony'],
  },
  {
    image: '/assets/gallery9.jpg',
    title: 'Forest Retreat Suite',
    description: 'Immerse yourself in nature with a suite surrounded by lush forests, offering ultimate tranquility.',
    features: ['Forest Views', 'Eco-Friendly Design', 'Private Terrace', 'Nature Walks'],
  },
  {
    image: '/assets/gallery10.jpg',
    title: 'Digital Nomad Suite',
    description: 'A suite designed for digital nomads, offering high-speed internet, a comfortable workspace, and relaxation zones.',
    features: ['High-Speed Internet', 'Ergonomic Workspace', 'Relaxation Zones', '24/7 Tech Support'],
  }
];

const suiteVariants = {
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

export default function Suites() {
  return (
    <section className="bg-gray-50 min-h-screen px-6 md:px-20 py-24 text-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-serif font-bold text-center mb-8"
        >
          Premium Suites
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          Discover our exclusive suites, each designed with luxury, comfort, and unparalleled attention to detail.
        </motion.p>

        {/* Suite Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {suiteList.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={suiteVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Full-width Image */}
              <div className="relative group overflow-hidden rounded-t-2xl">
                <img src={item.image} alt={item.title} className="w-full h-60 object-cover transition-all duration-300 group-hover:scale-200" />
                <div className="absolute inset-0 bg-indigo-100 opacity-0 group-hover:opacity-0 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <ul className="text-gray-600 text-sm">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2 mb-1">
                      <span className="text-xs">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-3 bg-indigo-600 text-white text-lg rounded-full shadow-md hover:shadow-xl transition-all"
          >
            <Link href="/contact">
              Book Your Suite
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
