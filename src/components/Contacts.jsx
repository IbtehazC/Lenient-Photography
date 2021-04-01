import React from "react";
import { Button, Nav, Navbar, Card } from "react-bootstrap";
import Picture from "./Homepage/pictures/lenient 5.jpg";
import Picture2 from "./Homepage/pictures/lenient6.jpg";
import Picture3 from "./Homepage/pictures/lenient8.jpg";

const Contacts = () => {
  return (
    <>
      <div>
        <div className="appbar">
          <div className="title">Leninent Photography</div>
        </div>
        <Navbar bg="dark" variant="dark">
          <div className="navbar">
            <Navbar.Brand href="#home">Lenient Photography</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#packages">Packages</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>
      <div className="card-holder">
        <a
          href="https://www.facebook.com/LenientPhotography"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card style={{ width: "18rem", height: "25rem" }}>
            <Card.Img variant="top" src={Picture} />
            <Card.Body>
              <Card.Title>Facebook Page</Card.Title>
              <Card.Text>
                Connect through facebook page to hire photographer
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
        <a
          href="https://www.instagram.com/lenient.photography/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card style={{ width: "18rem", height: "25rem" }}>
            <Card.Img variant="top" src={Picture2} />
            <Card.Body>
              <Card.Title>Instagram</Card.Title>
              <Card.Text>Check out their instagram page</Card.Text>
            </Card.Body>
          </Card>
        </a>
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img variant="top" src={Picture3} />
          <Card.Body>
            <Card.Title>Contact Information</Card.Title>
            <Card.Text>
              Labiba Ferdous : 01716516488 Email Address :
              labibaferdousema@gmail.com
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Contacts;
