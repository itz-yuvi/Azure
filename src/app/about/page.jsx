'use client';

import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import { FaLeaf, FaSpa, FaSwimmer, FaConciergeBell } from 'react-icons/fa';

export default function About() {
  return (
    <div>
      <section className="min-h-screen bg-white text-gray-900 px-6 md:px-20 py-24">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold text-center mb-8"
          >
            About Our Resort
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-xl md:text-2xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          >
            A luxurious escape on Australia’s coastline—where nature meets elegance, and every stay tells a story.
          </motion.p>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-16 mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-3">Our Mission</h2>
                <p className="text-lg text-gray-700">
                  To craft a harmonious retreat where modern luxury and natural beauty come together for unforgettable experiences.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-3">Our Values</h2>
                <p className="text-lg text-gray-700">
                  Rooted in sustainability, cultural respect, and world-class service, our values guide every guest interaction.
                </p>
              </div>
            </motion.div>

            {/* Icon Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-10"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <FaLeaf size={40} className="text-green-600" />
                <h3 className="text-xl font-semibold">Eco-Friendly</h3>
                <p className="text-sm text-gray-600">
                  We follow green practices to protect and preserve the environment.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <FaSpa size={40} className="text-purple-600" />
                <h3 className="text-xl font-semibold">Wellness & Spa</h3>
                <p className="text-sm text-gray-600">
                  Rejuvenate your soul with our serene wellness experiences.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <FaSwimmer size={40} className="text-blue-600" />
                <h3 className="text-xl font-semibold">Infinity Pool</h3>
                <p className="text-sm text-gray-600">
                  Dive into relaxation with panoramic ocean views.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <FaConciergeBell size={40} className="text-yellow-600" />
                <h3 className="text-xl font-semibold">24x7 Concierge</h3>
                <p className="text-sm text-gray-600">
                  Personalized service that caters to your every need.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Gallery />
    </div>
  );
}
