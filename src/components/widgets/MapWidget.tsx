import React from 'react';

const MapWidget = ({ location }: { location: string }) => {
  return (
    <div className="gmap_canvas overflow-hidden bg-gray-300 h-[400px] w-full">
      <iframe width="100%" height="400" id="gmap_canvas" src={location} />
    </div>
  );
};

export default MapWidget;
