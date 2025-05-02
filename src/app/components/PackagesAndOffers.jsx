'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const offers = [
  {
    name: 'Honeymoon Escape',
    description:
      'Celebrate love with a romantic 5-night stay including champagne on arrival, sunset sail, and spa treatments.',
    badge: 'Couples Favorite',
    image: '/assets/villa1.jpg',
  },
  {
    name: 'Wellness Retreat',
    description:
      'Unwind with sunrise yoga, guided beach meditation, organic meals, and oceanview spa therapy in this 3-night package.',
    badge: 'Mind & Body',
    image: '/assets/villa2.jpg',
  },
  {
    name: 'Summer Escape – 20% Off',
    description:
      'Book your summer getaway now and enjoy 20% off stays over 3 nights. Includes complimentary breakfast and coastal hikes.',
    badge: 'Limited Time',
    image: '/assets/villa3.jpg',
  },
];

export default function PackagesAndOffers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6"
        >
          Exclusive Packages & Offers
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover curated experiences inspired by Australia’s natural beauty. Enjoy seasonal offers and bespoke escapes tailored for you.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out shadow-sm"
            >
              <div className="relative h-56 overflow-hidden group">
                <motion.img
                  src={offer.image}
                  alt={offer.name}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-full object-cover transform group-hover:scale-200 transition-transform duration-500 ease-out"
                />
                {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <motion.span
                  className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {offer.badge}
                </motion.span>
              </div>

              <div className="p-6 text-left">
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {offer.name}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {offer.description}
                </motion.p>

                <Link href="/contact">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: '#1f2937', // gray-900
                      boxShadow: '0 0 0 2px #00000020',
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative bg-gray-900 text-white px-5 py-2 cursor-pointer rounded-full text-sm tracking-wide overflow-hidden"
                  >
                    <span className="relative z-10">Book Package</span>
                    <motion.span
                      layoutId="shimmer"
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                    />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
