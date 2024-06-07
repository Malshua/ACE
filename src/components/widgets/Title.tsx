import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  titleStyle?: string;
  barStyle?: string;
}

const Title = ({ children, titleStyle, barStyle }: TitleProps) => {
  return (
    <div>
      <h2
        className={`text-2xl md:text-3xl font-bold ${
          titleStyle || 'text-center text-primary-default'
        }`}
      >
        {children}
      </h2>
      <div
        className={`mt-2 h-1 w-14 rounded-full ${
          barStyle || 'mx-auto bg-primary-default'
        }`}
      />
    </div>
  );
};

export default Title;
