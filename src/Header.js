import React from 'react';
import { Jumbotron } from 'reactstrap';
import Links from './Links';

function Header() {
    return (
      <div className="header">
        <Jumbotron>
        <img src="./profile-pic-crop" class="rounded-circle" alt="circular profile"/>
          <Links />
        </Jumbotron>
      </div>
    );
  }
  
  export default Header;
  