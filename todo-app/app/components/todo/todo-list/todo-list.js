import React from "react";
import TodoRow from '../todo-row/todo-row';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.editClicked = this.editClicked.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);
  }

  editClicked(todo) {
    this.props.editClicked(todo);
  }

  deleteClicked(todo) {
    this.props.deleteClicked(todo);
  }

  render() {

    var rows = [];
    var self = this;
    this.props.todos.forEach(function(todo, index) {
        rows.push(<TodoRow todo={todo} key={todo.id} index={index} editClicked={self.editClicked} deleteClicked={self.deleteClicked} />);
    });

    return (
      <table className="table table-bordered">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
      </table>
    );
  }
}

TodoList.propTypes = {
  editClicked: React.PropTypes.func.isRequired,
  deleteClicked: React.PropTypes.func.isRequired
};
