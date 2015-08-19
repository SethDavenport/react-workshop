var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var Greeting = require('./greeting');

describe('greeting', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument( < Greeting / > );
    expect(root).toExist();
  });
});