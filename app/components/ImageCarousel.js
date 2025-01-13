
'use client';
import { useState } from 'react';

const images = ["/path-to-image1.jpg", "/path-to-image2.jpg", "/path-to-image3.jpg"];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((currentIndex + 1) % images.length);
  const handlePrev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <img src={images[currentIndex]} alt="Coffee Image" className="w-full h-64 object-cover rounded-lg" />
      <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-900 text-white rounded-l-lg">Previous</button>
      <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-900 text-white rounded-r-lg">Next</button>
    </div>
  );
}
