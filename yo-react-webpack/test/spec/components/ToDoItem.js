'use strict';

describe('ToDoItem', function () {
  var ToDoItem, component;

  beforeEach(function () {
    ToDoItem = require('../../../src/scripts/components/ToDoItem.jsx');
    component = ToDoItem();
  });

  it('should create a new instance of ToDoItem', function () {
    expect(component).toBeDefined();
  });
});
