import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Links() {
    return (
      <div className="links">
        <Nav>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg"/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon icon={["fab", "github"]} size="lg"/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon icon="file-alt" size="lg"/>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
  
  export default Links;
  