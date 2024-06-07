import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  width?: string;
  className?: string;
  v_padding?: string;
}

const Wrapper = ({ children, width, className, v_padding }: WrapperProps) => {
  return (
    <div
      className={`px-4 md:px-8 mx-auto ${v_padding || 'py-4'} ${
        width || 'lg:w-[95%] 2xl:w-[85%]'
      } ${className}`}
      // data-aos-duration="1000"
      // data-aos="fade-up"
    >
      {children}
    </div>
  );
};

export default Wrapper;
