import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFacilityChange = this.handleFacilityChange.bind(this);
    this.handleSortStarsChange = this.handleSortStarsChange.bind(this);
  }

  handleSortStarsChange(e) {
    let currentOrder = this.props.sortStarsBy === 'desc' ?
      'asc': 'desc';

    this.props.onSortStarsChange(currentOrder);
  }

  handleFacilityChange(e) {
    this.props.onFacilityChange({
      selected: e.target.checked,
      name: e.target.value
    });
  }

  render() {
    const options = [];

    const selectedFacilities = this.props.selectedFacilities;

    const FacilityCheckbox = (props) => {
      const isSelected = selectedFacilities.indexOf(props.facility) > -1;
      return (
        <span>
        {props.facility}
          <input
            type="checkbox"
            value={props.facility}
            key={this.props.key}
            checked={isSelected}
            onChange={this.handleFacilityChange}
          />
          </span>
      );
    };

    const FilterRow = (props) => {
      return (
        <div className="filters">
          <div className="filtersHeader">Filters:</div>
          <div className="facilitiesRow">Facilities: {props.options}</div>

        </div>
      );
    };

    const SortByRow = (props) => {
      return (
        <div className="sortRow">
          <div className="spacer">Sort By:</div>
          <div onClick={this.handleSortStarsChange} className={this.props.sortStarsBy}>
            Star Rating
            <span className="ascendingLabel">(Ascending)</span>
            <span className="descendingLabel">(Descending)</span>
          </div>
        </div>
      );
    };

    this.props.facilities.forEach((facility, i) => {
      options.push(
        <FacilityCheckbox facility={facility} key={i}/>
      );
    });

    return (
      <form>
        <FilterRow options={options}/>
        <SortByRow/>
      </form>
    );
  }
}

SearchBar.propTypes = {
  key: PropTypes.number,
  facilities: PropTypes.array,
  selectedFacilities: PropTypes.array,
  sortStarsBy: PropTypes.func,
  onSortStarsChange: PropTypes.func,
  onFacilityChange: PropTypes.func
};

export default SearchBar;
