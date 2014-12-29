'use strict';

describe('HotelApp', function () {
  var HotelApp, component;

  beforeEach(function () {
    HotelApp = require('../../../src/scripts/components/HotelApp.jsx');
    component = HotelApp();
  });

  it('should create a new instance of HotelApp', function () {
    expect(component).toBeDefined();
  });
});
