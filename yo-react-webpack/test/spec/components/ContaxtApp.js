'use strict';

describe('Main', function () {
  var ContaxtApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ContaxtApp = require('../../../src/scripts/components/ContaxtApp.jsx');
    component = ContaxtApp();
  });

  it('should create a new instance of ContaxtApp', function () {
    expect(component).toBeDefined();
  });
});
