import "./NavSide.css";
import logo from "../../assets/images/templatemo-barber-logo.png";

import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
const NavSide = () => {
  return (
  <>
      <Navbar className="navBar text-center " sticky="top" >
          <Container className="flex-column justify-content-center align-items-center gap-5 ">
            <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
            <Nav className="flex-column">
              <Nav.Link as ={ NavLink} to="/">Home</Nav.Link>
              <Nav.Link as ={ NavLink} to="/story">OUR STORY</Nav.Link>
              <Nav.Link as ={ NavLink} to="/services">SERVICES</Nav.Link>
              <Nav.Link as ={ NavLink} to="/price">PRICE LIST</Nav.Link>
              <Nav.Link as ={ NavLink} to="/contact">CONTACT</Nav.Link>
        
            </Nav>
          </Container>
        </Navbar>
      
  </>
  );
};

export default NavSide;
