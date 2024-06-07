import React from 'react';

const ProgressBar = () => {
  return (
    <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
      <div className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded-full bg-secondary-default text-white"></div>
    </div>
  );
};

export default ProgressBar;
