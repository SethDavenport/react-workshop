'use strict';

import React from 'react';

export default React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <h1 className="text-center">
        {this.props.title}
      </h1>
    );
  }
});