import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Carousel = ({ data }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-2">
      <div className="flex flex-col items-start gap-3">
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#263238]">
            {data[currentIndex].title}
          </h2>
          <p className="text-gray-600">{data[currentIndex].description}</p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-bold text-[#263238]">
            {data[currentIndex].name}
          </h2>
          <p className="text-gray-600">{data[currentIndex].uni}</p>
        </div>

        <div className="flex mt-4 space-x-2">
          {data.map((_: any, index: number) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full bg-gray-400 ${
                index === currentIndex ? 'bg-secondary-default' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>

        <div className="flex mt-4 space-x-4">
          <button
            onClick={handlePrev}
            className="rounded-full p-2 border border-secondary-default hover:bg-secondary-default focus:outline-none focus:bg-white"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full p-2 border border-secondary-default hover:bg-secondary-default focus:outline-none focus:bg-secondary-default "
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="w-full h-80 md:w-70 md:h-66 sm:w-2/3 p-4 relative justify-self-center">
        {data.map((item: any, index: number) => (
          <Image
            key={index}
            src={item.imageUrl}
            alt={item.title}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
