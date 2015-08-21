import React from "react";
import TodoList from "./todo-list/todo-list";
import TodoForm from "./todo-form/todo-form";

export default React.createClass({
  getInitalState: function() {
    console.log('called');
    return {
      todoList: [],
      todo: {}
    };
  },
  saveTodo: function(todo) {
    console.log('save', todo);
  },
  editTodo: function(todo) {
    console.log('edit', todo);
  },
  deleteTodo: function(todo) {
    console.log('edit', todo);
  },
  render: function() {
    console.log(this.state);
    return (
      <div>
        <TodoForm todo={this.todo} onSave={this.saveTodo} />
        <TodoList todos={this.state.todoList} editClicked={this.editTodo} deleteClicked={this.deleteTodo} />
      </div>
    );
  },
});
