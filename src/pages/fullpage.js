import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Landing from "../components/landingpage/landing";
class fullPage extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 100000000000000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/Welcome" />
    ) : (
      <>
        <Landing />
      </>
    );
  }
}

export default fullPage;
