import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default props => (
  <Navbar bg="none" expand="lg">
    <Navbar.Brand href="/">Matrixblend Media</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav ">
      <Nav className="navbar-right">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          {" "}
          About
        </Nav.Link>
        {/* <Nav.Link as={Link} to="/music">
          Music
        </Nav.Link> */}
        <Nav.Link as={Link} to="/contact">
          Contact us
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
