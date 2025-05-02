import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  '/assets/gallery1.jpg',
  '/assets/gallery2.jpg',
  '/assets/gallery3.jpg',
  '/assets/gallery4.jpg',
  '/assets/gallery5.jpg',
  '/assets/gallery6.jpg',
  '/assets/gallery7.jpg',
  '/assets/gallery8.jpg',
  '/assets/gallery9.jpg',
  '/assets/gallery10.jpg',
  '/assets/villa3.jpg',
  '/assets/villa2.jpg'
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-12">
          Virtual Tour of Paradise
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Resort ${index + 1}`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={() => setSelectedImage(src)}
              className="cursor-pointer rounded-xl shadow-md object-cover h-48 w-full transition-transform duration-300"
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-4xl w-full p-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <img
                  src={selectedImage}
                  alt="Large view"
                  className="rounded-xl max-h-[80vh] mx-auto object-contain"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
