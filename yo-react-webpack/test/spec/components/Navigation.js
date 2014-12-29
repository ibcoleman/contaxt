'use strict';

describe('Navigation', function () {
  var Navigation, component;

  beforeEach(function () {
    Navigation = require('../../../src/scripts/components/Navigation.jsx');
    component = Navigation();
  });

  it('should create a new instance of Navigation', function () {
    expect(component).toBeDefined();
  });
});
