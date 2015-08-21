import React from "react";

export default React.createClass({

  propTypes: {
    editClicked: React.PropTypes.func.isRequired,
    deleteClicked: React.PropTypes.func.isRequired,
    todo: React.PropTypes.object.isRequired
  },
  editClicked: function() {
    this.props.editClicked(this.props.todo);
  },
  deleteClicked: function() {
    this.props.deleteClicked(this.props.todo);
  },

  render: function() {
    return (
      <tr>
          <td>{this.props.todo.name}</td>
          <td>
            <button className='btn btn-primary btn-sm' onClick={this.editClicked}>Edit</button>
            &nbsp;&nbsp;
            <button className='btn btn-danger btn-sm' onClick={this.deleteClicked}>Delete</button>
          </td>
      </tr>
    );
  },
});
