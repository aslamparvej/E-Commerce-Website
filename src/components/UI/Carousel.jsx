import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MoveRight } from "lucide-react";

const Carousel = ({ slides, autoSlide = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      {/* Slides */}
      <div
        className="h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full shrink-0 flex justify-between relative p-8"
          >
            <div className="flex flex-col gap-4 justify-center flex-1">
              {slide.subtitle && (
                <p className="text-white text-lg">{slide.subtitle}</p>
              )}
              {slide.title && (
                <h2 className="text-white md:text-5xl lg:text-5xl text-2xl leading-tight font-semibold">
                  {slide.title}
                </h2>
              )}
              {slide.action && (
                <p className="text-white text-lg font-medium flex items-center gap-2 mt-4">
                  <Link
                    to={slide.actionLink}
                    className="underline underline-offset-8"
                  >
                    {slide.action}
                  </Link>
                  <MoveRight />
                </p>
              )}
            </div>
            {slide.image && (
              <div className="w-1/2 h-68">
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="flex gap-2  absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="w-5 h-5 p-1 flex justify-center items-center rounded-full border border-gray-200"
          >
            {currentIndex === index && (
              <span className="w-full h-full inline-block bg-white rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
