import React from 'react';
import PropTypes from 'prop-types';

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

HotelRow.propTypes = {
  hotel: PropTypes.object
};

export default HotelRow;
