import React from 'react';
import HotelRow from './HotelRow';
import PropTypes from 'prop-types';

class HotelTable extends React.Component {
  render() {
    const selectedFacilities = this.props.selectedFacilities;

    const rows = [];

    this.props.hotels.forEach((hotel, i) => {

      let hasFacilities = true;
      selectedFacilities.forEach((selection) => {
        if (hotel.Facilities.indexOf(selection) === -1) {
          hasFacilities = false;
        }
      });

      if (!hasFacilities) {
        return;
      }

      rows.push(
        <HotelRow
          hotel={hotel}
          key={i}
        />
      );

    });

    return (
      <div className="hotelsContainer">
        {rows}
      </div>
    );
  }
}

HotelTable.propTypes = {
  hotels: PropTypes.array,
  selectedFacilities: PropTypes.array
};

export default HotelTable;
