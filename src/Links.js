import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Resume from './Martha Sharpe Resume.pdf'

function Links() {
    return (
      <div className="links">
        <Nav>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/marthasharpe2020/" target="blank">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg"/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/marthasharpe" target="blank">
              <FontAwesomeIcon icon={["fab", "github"]} size="lg"/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={Resume} target="blank">
              <FontAwesomeIcon icon="file-alt" size="lg"/>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
  
  export default Links;
  