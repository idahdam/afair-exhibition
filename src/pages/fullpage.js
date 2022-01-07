import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Welcome from "./welcome";
class fullPage extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/Welcome" />
    ) : (
      <>
        <Welcome />
      </>
    );
  }
}

export default fullPage;
