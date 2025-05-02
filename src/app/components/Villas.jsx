'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const suites = [
  {
    name: 'Oceanview Suite',
    src: '/assets/villa1.jpg',
    description: 'Experience unparalleled views of the ocean from your private balcony.',
  },
  {
    name: 'Beachfront Villa',
    src: '/assets/villa2.jpg',
    description: 'Enjoy the luxury of a private villa right on the beach.',
  },
  {
    name: 'Garden Retreat',
    src: '/assets/villa3.jpg',
    description: 'Relax amidst lush gardens with the sounds of nature surrounding you.',
  },
  {
    name: 'Skyline Penthouse',
    src: '/assets/villa4.jpg',
    description: 'Stay in the penthouse with breathtaking views of the coastline.',
  },
  {
    name: 'Mountain View Lodge',
    src: '/assets/gallery1.jpg',
    description: 'Embrace the serenity of the mountains in your exclusive lodge.',
  },
  {
    name: 'Lakeside Cottage',
    src: '/assets/gallery2.jpg',
    description: 'A charming cottage by the lake, perfect for peaceful getaways.',
  },
  {
    name: 'Luxury Mansion',
    src: '/assets/gallery3.jpg',
    description: 'A spacious and elegant mansion for an opulent retreat.',
  },
  {
    name: 'Tropical Oasis',
    src: '/assets/gallery4.jpg',
    description: 'Surround yourself with lush tropical greenery in this private paradise.',
  },
];

export default function Villas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-12"
        >
          Our Suites & Villas
        </motion.h2>

        <div className="relative">
          <div className="flex overflow-x-auto space-x-8 py-4">
            {suites.map((suite, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg w-[300px] flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
                  <Image
                    src={suite.src}
                    alt={suite.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{suite.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{suite.description}</p>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm tracking-wide hover:bg-gray-800 transition"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
