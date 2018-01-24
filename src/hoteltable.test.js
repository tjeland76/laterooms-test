import React from 'react';
import {expect} from 'chai';
import { shallow, mount } from 'enzyme';

import HotelRow from './components/HotelRow';
import HotelTable from './components/HotelTable';


describe('<HotelTable/>', () => {
  let table;
  beforeEach(() => {
    table = shallow(<HotelTable hotels={[{StarRating:2, Name: 'hotelone', Facilities: ['car park', 'pool']},{StarRating:3, Name: 'hoteltwo', Facilities: ['pool']},{StarRating:4, Name: 'hotelthree', Facilities: []}]} selectedFacilities={['car park']}  />);
  });

  it('should find wrapper element', () => {

    expect(table.find('.hotelsContainer')).to.have.length(1);

  });

  it('should displayed filtered hotels by selected facilities', () => {

    expect(table.find(HotelRow)).to.have.length(1);

  });

  it('should clear facilities and show all hotels', () => {
    table.setProps({ selectedFacilities: []} );
    expect(table.find(HotelRow)).to.have.length(3);

  });

  it('should amend facilities and show correct hotels', () => {
    table.setProps({ selectedFacilities: ['pool']} );
    expect(table.find(HotelRow)).to.have.length(2);

  });

});
