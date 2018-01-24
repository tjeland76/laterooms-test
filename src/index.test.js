// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

import React from 'react';
import {expect} from 'chai';
import { shallow, mount } from 'enzyme';

import HotelRow from './components/HotelRow'

describe('<HotelRow/>', () => {
  it('should find hotel name element', () => {

    const row = shallow(<HotelRow hotel={{StarRating:2, Name: 'hotelone', Facilities: ['car park', 'pool']}} />)

    expect(row.find('.hotelName').text()).to.equal('hotelone');

  });

});
