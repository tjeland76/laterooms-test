import React from 'react';
import HotelContainer from './HotelContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };

  }
  render() {

    const FACILITIES = ['car park', 'pool', 'gym'];

    const HOTELS = [
      {StarRating:2, Name: 'hotelone', Facilities: ['car park', 'pool']},
      {StarRating:3, Name: 'hoteltwo', Facilities: ['pool']},
      {StarRating:4, Name: 'hotelthree', Facilities: []},
      {StarRating:1, Name: 'Hilton', Facilities: ['gym', 'pool']},
      {StarRating:5, Name: 'Caesars Palace', Facilities: ['gym']},
      {StarRating:3, Name: 'Holiday Inn', Facilities: ['car park', 'pool']}
    ];

    return (
      <div>
        <h1>Laterooms test</h1>
        <HotelContainer hotels={HOTELS} facilities={FACILITIES}/>
      </div>
    );

  }
}

export default App;
