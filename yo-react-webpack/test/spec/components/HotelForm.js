'use strict';

describe('HotelForm', function () {
  var HotelForm, component;

  beforeEach(function () {
    HotelForm = require('../../../src/scripts/components/HotelForm.jsx');
    component = HotelForm();
  });

  it('should create a new instance of HotelForm', function () {
    expect(component).toBeDefined();
  });
});
