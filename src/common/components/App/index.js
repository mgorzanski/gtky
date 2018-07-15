import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Header from "./../../styled-components/Header";
import Sidebar from './../Sidebar';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Container fluid>
          <Header />
          <main id="main" role="main">
            <Sidebar />
          </main>
        </Container>
      </div>
    );
  }
}

export default App;
