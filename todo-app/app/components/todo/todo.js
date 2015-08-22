'use strict';

import React from "react";
import TodoList from "./todo-list/todo-list";
import TodoForm from "./todo-form/todo-form";

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: {},
      todoList: [{
        name: 'one'
      }]
    };

    this.saveTodo = this.saveTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

  }

  saveTodo (todo) {
    this.state.todoList.push(todo);
    this.setState(this.state);
  }

  editTodo (todo) {
    this.state.todo = todo;
    this.setState(this.state);
    console.log(this.state);
  }

  deleteTodo (todo) {
    console.log('edit', todo);
  }

  render() {
    return (
      <div>
        <TodoForm todo={this.state.todo} onSave={this.saveTodo} />
        <TodoList todos={this.state.todoList} editClicked={this.editTodo} deleteClicked={this.deleteTodo} />
      </div>
    );
  }

}
