import React from 'react';

const HotelRow = (props) => {
  const hotel = props.hotel;

  return (
    <div>
      <div className="hotelName">{hotel.Name}</div>
    </div>
  );
};


export default HotelRow;
