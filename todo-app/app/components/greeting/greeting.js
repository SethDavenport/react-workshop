import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
        Hello, yayyyyy {this.props.name}!
      </div>
    );
  },
});