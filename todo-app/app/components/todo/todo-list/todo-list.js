import React from "react";
import TodoRow from '../todo-row/todo-row';

export default React.createClass({

  propTypes: {
    editClicked: React.PropTypes.func.isRequired,
    deleteClicked: React.PropTypes.func.isRequired
  },
  getInitalState: function() {
    return {todos:[]};
  },
  editClicked: function(todo) {
    this.props.editClicked(todo);
  },
  deleteClicked: function(todo) {
    this.props.deleteClicked(todo);
  },
  render: function() {

    var rows = [];
    var self = this;
    this.state.todos.forEach(function(todo) {
        rows.push(<TodoRow todo={todo} key={todo.name} editClicked={self.editClicked} deleteClicked={self.deleteClicked} />);
    });

    return (
      <table className="table table-bordered">
          <thead>
              <tr>
                  <th>Name{this.props.todos.length} </th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
      </table>
    );
  },
});