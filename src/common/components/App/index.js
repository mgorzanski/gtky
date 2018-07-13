import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Header from "./../../styled-components/Header";

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Header />

        <main />
        <p>Test</p>
        <footer />
      </div>
    );
  }
}

export default App;
