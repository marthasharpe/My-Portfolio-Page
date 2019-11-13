import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Links from './Links';
import profile from './profile-pic-crop.jpg';

function Header() {
    return (
      <Container className="align-items-center fluid">
        <h1>Martha Sharpe</h1>
        <h2>Software Engineer</h2>
        <Row className="justify-content-center">
          <Col xs="10" md="6" xl="4">
          <img src={profile} className="rounded-circle img-fluid" alt="circular profile"/>
          </Col>
        </Row>
        <p>About Me</p>
        <Row className="justify-content-center">
          <Links />
        </Row>
      </Container>
    );
  }
  
  export default Header;
  