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
          <Row>
            <Header />
          </Row>
          <Row>
            <main id="main" role="main">
              
                <Row>
                  <Col>
                    <Sidebar />
                  </Col>
                </Row>
              
            </main>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
