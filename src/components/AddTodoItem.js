import React, { Component } from 'react';

export default class AddTodoItem extends Component {

  state = {
    todo: '',
  }

  onChangeAddTodoItem(e) {
    this.setState({ todo: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    if(!this.state.todo) {
      return
    }
    this.props.onFormSubmit({
      id: Math.ceil(Math.random() * 10000),
      text: this.state.todo,
      completed: false,
    });
    this.setState({todo: ''});
  }

  render() {
    return (
      <form
        className="form-container"
        onSubmit={(e) => this.onFormSubmit(e)}
      >
        <div className="field">
          <i className="fas fa-edit"></i>
          <input
            type="text"
            onChange={(e) => this.onChangeAddTodoItem(e)}
            value={this.state.todo}
            placeholder="Add some tasks. . ."
          />
        </div>
      </form>
    );
  }
}