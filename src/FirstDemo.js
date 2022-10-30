import React, { Component } from "react";

export default class FirstDemo extends Component {
  state = {
    firstName: "",
  };
  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="display-demo">{this.state.firstName}</div>

        <form>
          <div>
            <label>Firstname: </label>
            <input
              placeholder="Firstname"
              name="firstName"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </>
    );
  }
}
