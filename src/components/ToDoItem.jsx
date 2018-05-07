import React from "react";

class ToDoItem extends React.Component {
  render() {
    const todo = this.props.data;

    return (
      <tr className="todo-item">
        <td>
          <div className="custom-control custom-checkbox text-left">
            <input
              className="custom-control-input checkbox"
              // in case we have multiple checkboxes (like form questions) then you would need a value, other than that just enter a random one, otherwise it complains
              value={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              type="checkbox"
              checked={todo.done}
              onChange={this.props.toggleToDoDone}
            />
            <label
              className="custom-control-label"
              htmlFor={`todo-done-${todo.uuid}`}
            >
              &nbsp;
            </label>
          </div>
        </td>
        <td className="col-1">
          <input
            className={`form-control ${todo.done ? "done" : ""} `}
            type="text"
            defaultValue={todo.text}
            onChange={e => {
              this.props.changedInput(e, todo.uuid);
            }}
          />
        </td>
        <td className="text-right">
          <button
            className="btn btn-outline-dark"
            onClick={e => {
              this.props.removeToDo(todo.uuid);
            }}
          >
            <span className="icon-remove">remove</span>
          </button>
        </td>
      </tr>
    );
  }
}

export default ToDoItem;
