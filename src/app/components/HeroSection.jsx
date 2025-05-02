'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-white to-white overflow-hidden">
      {/* Subtle background blur layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/90 backdrop-blur-sm"
      />

      {/* Text content block */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
        className="relative z-10 text-center px-6 md:px-12 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-gray-900 leading-tight mb-4">
          Where Serenity Meets Sophistication
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          A coastal luxury resort experience in Australia
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
  href="/contact"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm tracking-wide cursor-pointer hover:bg-gray-800 transition inline-block"
>
  Book Your Stay
</motion.a>
<motion.a
  href="/suites"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="border border-gray-900 text-gray-900 px-6 py-3 rounded-full text-sm tracking-wide cursor-pointer hover:bg-gray-100 transition inline-block"
>
  Explore the Resort
</motion.a>

        </motion.div>
      </motion.div>
    </section>
  );
}
