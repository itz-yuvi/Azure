'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily R.',
    location: 'Sydney, Australia',
    rating: 5,
    image: '/assets/aa.jpeg',
    message:
      'An unforgettable escape! Every detail was perfectly curated. The spa experience and sunset cruise were pure magic. Highly recommend!',
  },
  {
    name: 'Liam T.',
    location: 'Melbourne, Australia',
    rating: 4,
    image: '/assets/bb.jpeg',
    message:
      'Stunning views, delicious food, and warm staff. The villa was pristine and felt like home. Will be coming back next summer.',
  },
  {
    name: 'Olivia H.',
    location: 'Brisbane, Australia',
    rating: 5,
    image: '/assets/cc.jpeg',
    message:
      'Truly relaxing. I loved the yoga sessions and fresh organic meals. It felt like paradise tucked away from the world.',
  },
  {
    name: 'Henry.',
    location: 'Adelaide, Australia',
    rating: 5,
    image: '/assets/dd.jpeg',
    message:
      'A dream vacation come true! The service was exceptional, and the private beach was a serene escape. I felt rejuvenated after my stay.',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-12">
          What Our Guests Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10 shadow-lg text-left"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-32 h-32 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  {/* Animated Text Transition */}
                  <motion.p
                    className="text-gray-700 text-base italic mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  >
                    “{testimonials[index].message}”
                  </motion.p>
                  <div className="flex items-center gap-2 mb-1">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  {/* Animated Text Transition for Name */}
                  <motion.p
                    className="text-gray-900 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  >
                    {testimonials[index].name}
                  </motion.p>
                  {/* Animated Text Transition for Location */}
                  <motion.p
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  >
                    {testimonials[index].location}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
