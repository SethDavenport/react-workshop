'use strict';

import React from "react";
import TodoList from "./todo-list/todo-list";
import TodoForm from "./todo-form/todo-form";

import TodoStore from '../../stores/todo-store';

export default class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todo: {},
      todoList: [],
      selectedIndex: -1
    };

    this.saveTodo = this.saveTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.cancelClick = this.cancelClick.bind(this);

  }

  cancelClick() {
    this.state.selectedIndex = -1;
    this.state.todo = {};
    this.setState(this.state);
  }

  saveTodo (todo) {
    if (!todo.id && this.state.selectedIndex === -1) {
      todo.id = (new Date()).getTime();
      this.state.todoList.push(todo);
    } else {
      this.state.todoList[this.state.selectedIndex] = todo;
    }

    this.state.selectedIndex = -1;
    this.setState(this.state);
    setTimeout(this.refs.todoForm.cancelClick);
  }

  editTodo (index) {
    this.state.selectedIndex = index;
    this.setState({
      todo: this.state.todoList[index]
    });
  }

  deleteTodo (index) {
    this.state.todoList.splice(index, 1);
    this.state.todo = {};
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <TodoForm ref='todoForm' todo={this.state.todo} onSave={this.saveTodo} cancelClick={this.cancelClick} />
        <hr/>
        <TodoList todos={this.state.todoList} editClicked={this.editTodo} deleteClicked={this.deleteTodo} />
      </div>
    );
  }

}
