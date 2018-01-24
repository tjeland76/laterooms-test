import React from 'react';

const HotelRow = (props) => {

  const hotel = props.hotel;
  const hotelFacilities = hotel.Facilities.join(', ');

  return (
    <div>
      <div className="hotelName">{hotel.Name}</div>
      <div className="starRating">{hotel.StarRating} Star</div>
      <div className="facilities">{hotelFacilities}</div>
    </div>
  );
};

export default HotelRow;
