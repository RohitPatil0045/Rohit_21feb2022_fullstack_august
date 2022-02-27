import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBarMenu = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Products</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <NavLink className="show-products-nav" to="/">Products</NavLink>
            <NavLink className="add-product-nav" to="/addProduct"> Add Products</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarMenu;
