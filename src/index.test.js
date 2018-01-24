// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

import React from 'react'
import {expect} from 'chai';
import { shallow, mount } from 'enzyme'

describe('Our first test', () => {
  it('should pass', () => {

      expect(true).to.equal(true);

  });


});
