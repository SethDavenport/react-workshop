import React from "react";
import Header from "./components/header/header";
import Todo from "./components/todo/todo";

React.render(
  <div>
    <Header title="Todo App"/>
  </div>,
  document.getElementById('main')
);