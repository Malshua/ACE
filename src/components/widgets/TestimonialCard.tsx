import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface TestimonialCardProps {
  data: {
    name: string;
    role: string;
    comment: string;
    img: string | StaticImageData;
  };
}

const TestimonialCard = ({ data }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="rounded-full w-fit h-fit border-4 border-gray-100">
        <Image
          src={data.img}
          height={96}
          width={96}
          alt="profile image"
          className="h-24 w-24 rounded-full object-cover"
        />
      </div>

      <div>
        <p className="text-lg font-bold">{data?.name}</p>
        <p className="text-sm text-gray-500">{data?.role}</p>
      </div>

      <div className="italic">{data?.comment}</div>
    </div>
  );
};

export default TestimonialCard;
