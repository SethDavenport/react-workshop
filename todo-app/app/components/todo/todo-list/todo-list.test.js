var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var TodoList = require('./todo-list');

describe('todo-list', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument( < TodoList / > );
    expect(root).toExist();
  });
});