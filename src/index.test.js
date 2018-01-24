// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

import React from 'react';
import {expect} from 'chai';
import { shallow, mount } from 'enzyme';

import HotelRow from './components/HotelRow'

describe('<HotelRow/>', () => {
  let row;
  beforeEach(() => {
    row = shallow(<HotelRow hotel={{StarRating:2, Name: 'hotelone', Facilities: ['car park', 'pool']}} />)
  });

  it('should find hotel name element', () => {

    expect(row.find('.hotelName').text()).to.equal('hotelone');

  });

  it('should find hotel star rating element', () => {

    expect(row.find('.starRating').text()).to.equal('2 Star');

  });

  it('should find hotel facilities element', () => {

    expect(row.find('.facilities').text()).to.equal('car park, pool');

  });

});
