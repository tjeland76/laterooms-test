import React from 'react';
import SearchBar from './SearchBar';
import HotelTable from './HotelTable';
import PropTypes from 'prop-types';

class HotelContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFacilities: [],
      sortStarsBy: '',
      hotels: props.hotels
    };

    this.handleSortStarsChange = this.handleSortStarsChange.bind(this);
    this.handleFacilityChange = this.handleFacilityChange.bind(this);
  }

  handleSortStarsChange(order) {
    // Check for sort setting
    if (order !== '') {
      const obj = [...this.state.hotels];

      // Sort the hotels as per the sort setting
      if (order === 'asc') {
        obj.sort((a,b) => b.StarRating - a.StarRating);
      } else {
        obj.sort((a,b) => a.StarRating - b.StarRating);
      }
      this.setState({
        hotels: obj
      });
    }

    this.setState({
      sortStarsBy: order
    });

  }

  handleFacilityChange(facilities) {


    if (facilities.selected) {
      // Add the facility to the selected list
      this.setState({
        selectedFacilities: [...this.state.selectedFacilities, facilities.name]
      });
    } else {
      // Remove the facility from the selected list
      const array = this.state.selectedFacilities;
      const index = array.indexOf(facilities.name);
      array.splice(index, 1);
      this.setState({selectedFacilities: array });
    }

  }

  render() {
    return (
      <div className="app">
        <SearchBar
          facilities={this.props.facilities}
          selectedFacilities={this.state.selectedFacilities}
          sortStarsBy={this.state.sortStarsBy}
          onFacilityChange={this.handleFacilityChange}
          onSortStarsChange={this.handleSortStarsChange}
        />
        <HotelTable
          hotels={this.state.hotels}
          selectedFacilities={this.state.selectedFacilities}
          sortStarsBy={this.state.sortStarsBy}
        />
      </div>
    );
  }
}

HotelContainer.propTypes = {
  hotels: PropTypes.array,
  facilities: PropTypes.array
};

export default HotelContainer;
