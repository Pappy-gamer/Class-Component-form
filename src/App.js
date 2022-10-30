import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component() {
  render() {
    return (
      <div>
        {/* <form>
          <div>
            <label htmlFor="firstname" />
            <input type="text" name="firstname" placeholder="Firstname" />
          </div>
        </form> */}
        <Form />
      </div>
    );
  }
}

export default App;
