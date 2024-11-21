import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import row from 'react-bootstrap/Row';
import App from './App';
import reportWebVitals from './reportWebVitals';

function About() {
   return (
      <>
      <div className="About">
      <div className="">
        <div className="about-page">
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br /><hr />
        <h3>Our Mission</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <br /><hr />
        <div className="div-card">
         <h3>Check out our testimonials!</h3>
         
          <Container fluid>
         <Row>
          <Col>
         <Card className="bg-dark text-light col-md-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Jude B.</Card.Title>
        <Card.Text>
          HostIt has become an integral part of my daily routine. It helps me to plan and schedule media content better than other other hosting services (and it is free!) I don't think there is a better alternative to HostIt.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className="bg-dark text-light col-md-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Mary O.</Card.Title>
        <Card.Text>
          I have no idea where my career would be without HostIt. It has cut my workload and working time in half!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className="bg-dark text-light col-md-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Paul A.</Card.Title>
        <Card.Text>
          There is no reason why HostIt shouldn't be voted Most Useful Software ever! It has continued to deliver over the years. Thank you to the developers of this great app!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    
     
        </div>
      </div>
      </div>
      </>
   )
}

export default About;