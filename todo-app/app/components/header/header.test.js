var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var Greeting = require('./header');

describe('header', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument( <Header / > );
    expect(root).toExist();
  });
});