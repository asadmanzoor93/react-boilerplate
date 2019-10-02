import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SiteLogo from '../../assets/images/site_logo.png';
import './index.scss';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/dashboard">
          <img
            src={SiteLogo}
            alt="site logoo"
            className="logo"
            height="48"
            width="70"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>Marketing Site</Nav.Link>
            <Nav.Link>Admin Panel</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" alignRight>
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
