'use strict';

describe('HotelTable', function () {
  var HotelTable, component;

  beforeEach(function () {
    HotelTable = require('../../../src/scripts/components/HotelTable.jsx');
    component = HotelTable();
  });

  it('should create a new instance of HotelTable', function () {
    expect(component).toBeDefined();
  });
});
