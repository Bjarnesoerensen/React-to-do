import React, { Fragment } from "react";

class ToDoForm extends React.Component {
  state = {
    error: ""
  };

  newItemText = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    this.clearError();
    const text = this.newItemText.current.value.trim();

    if (text.length === 0) {
      this.setError("Errormessage!");
      return;
    }
    this.props.addToDo(text);
    event.currentTarget.reset();
  };
  setError = message => {
    this.setState(state => {
      state.error = message;
      return state;
    });
  };

  clearError = () => {
    this.setState(state => {
      state.error = "";
      return state;
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.error.length !== 0 && (
          <div className="alert alert-danger">{this.state.error}</div>
        )}
        <form className="input-group my-3" onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            name="text"
            type="text"
            placeholder="Add a new todo-item"
            ref={this.newItemText}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              <i className="fa fa-plus" arial-hidden="true" /> &nbsp; add item
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default ToDoForm;
