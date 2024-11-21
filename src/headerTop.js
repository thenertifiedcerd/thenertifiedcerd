import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BiBadge, BiDoorOpen, BiHome, BiSearch, BiTrash } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';



function Head() {
  return (
    <>
    <div className="Head">
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary navbar-sticky" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#"><img src="%PUBLIC_URL%/cloud.png" height="40px" width="40px" alt=""/> HostIt</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="nav-toggle"/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home"><i className="bi bi-Home"></i> Home</Nav.Link>
                  <Nav.Link href="#About"><i className="bi bi-Badge"></i> About</Nav.Link>
                  <NavDropdown
                    title="Account"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3"><i className="cg cg-Profile"></i>Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <i className="bi bi-DoorOpen"></i>Log in or sign up
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" className="text-danger">
                     <i className="bi bi-Trash"></i>Delete account
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-primary" className="bi bi-search">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
    </>
  );
}

export default Head;