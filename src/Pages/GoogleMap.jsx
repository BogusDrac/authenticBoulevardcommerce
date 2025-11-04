import React from 'react';

const GoogleMap = () => {
  // Coordinates for 919 East Central Windmill Park, Boksburg
  const latitude = 0;
  const longitude = 0;

  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Our Location"
        className=" w-full h-full border-0"
        src={`https://www.google.com/maps/embed?pb=`}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;
