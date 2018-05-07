import React from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";
import { getRandomTagline } from "../helpers";

class App extends React.Component {
  render() {
    return (
      <div className="dashboard container">
        <Header tagline={getRandomTagline()} />
        <ToDoList storageKey="react-todo" />
      </div>
    );
  }
}

export default App;
