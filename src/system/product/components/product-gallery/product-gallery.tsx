import { Icon } from '@/shared';
import React, { useRef, useState } from 'react';

interface Props {
  photos: string[] | undefined;
}

export const ProductGallery: React.FC<Props> = ({ photos = [] }) => {
  const TRANSITION_DURATION = 0.3;

  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + photos.length) % photos.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const deltaX = touchEndX.current - touchStartX.current;
      if (deltaX > 50) {
        prevSlide(); // Swipe right
      } else if (deltaX < -50) {
        nextSlide(); // Swipe left
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const imagePosition = {
    transform: `translateX(-${currentSlide * (100 / photos.length)}%)`,
    transition: `transform ${TRANSITION_DURATION}s ease-in-out`,
  };

  return (
    <div
      className="relative py-2"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden rounded md:rounded-xl">
        <div className="flex" style={{ width: `${photos.length * 100}%`, ...imagePosition }}>
          {photos.map((image, index) => (
            <div key={index} className="w-full">
              <img
                loading="lazy"
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-96 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute text-gray-100 text-left
        flex justify-start items-center
        top-1/2 left-0 transform
        -translate-y-1/2 pl-8 h-full w-5/12 bg-transparent rounded-lg"
      >
        <Icon
          name="arrow-left"
          className="w-6 h-6 md:w-10 md:h-10 md:hover:scale-150 transition-all"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute text-gray-100 text-right
        flex justify-end items-center
        top-1/2 right-0 transform
        -translate-y-1/2 pr-8 h-full w-5/12 bg-transparent rounded-lg"
      >
        <Icon
          name="arrow-right"
          className="w-6 h-6 md:w-10 md:h-10 md:hover:scale-150 transition-all"
        />
      </button>
    </div>
  );
};
