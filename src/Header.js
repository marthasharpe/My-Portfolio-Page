import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Links from './Links';
import profile from './profile-pic-crop.jpg';

function Header() {
    return (
      <Container class="align-items-center">
        <Row class="justify-content-center">
          <Col xs="10" md="6" xl="4">
          <img src={profile} class="rounded-circle img-fluid justify-content-center" alt="circular profile"/>
          </Col>
        </Row>
        <Row>
          <Links />
        </Row>
      </Container>
    );
  }
  
  export default Header;
  