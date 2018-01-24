import React from 'react';
import HotelRow from './HotelRow';

class HotelTable extends React.Component {
  render() {

    const rows = [];

    this.props.hotels.forEach((hotel, i) => {

      rows.push(
        <HotelRow
          hotel={hotel}
          key={i}
        />
      );

    });

    return (
      <div  className="hotelsContainer">
        {rows}
      </div>
    );
  }
}

export default HotelTable;
