// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

import React from 'react';
import {expect} from 'chai';
import { shallow, mount } from 'enzyme';

import HotelRow from './components/HotelRow';
import HotelTable from './components/HotelTable';

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

  it('should amend hotel fields and see changes reflected', () => {
    row.setProps({ hotel: {StarRating:4, Name: 'change name', Facilities: ['gym', 'pool']} });
    expect(row.find('.hotelName').text()).to.not.equal('hotelone');
    expect(row.find('.hotelName').text()).to.equal('change name');
    expect(row.find('.starRating').text()).to.equal('4 Star');
    expect(row.find('.facilities').text()).to.equal('gym, pool');

  });

});


describe('<HotelTable/>', () => {
  let table;
  beforeEach(() => {
    table = mount(<HotelTable hotels={[{StarRating:2, Name: 'hotelone', Facilities: ['car park', 'pool']},{StarRating:3, Name: 'hoteltwo', Facilities: ['pool']},{StarRating:4, Name: 'hotelthree', Facilities: []}]}  />)
  });

  it('should find wrapper element', () => {

    expect(table.find('.hotelsContainer')).to.have.length(1);

  });

  it('display hotel rows', () => {

    expect(table.find(HotelRow)).to.have.length(3);

  });

});
