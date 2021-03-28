import React from 'react';
import styles from './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mass from './pictures/lenient3.jpg';
import Effect from './pictures/lenient1.jpg';
import photo3 from './pictures/lenient4.jpg';
import {Carousel, Button, Nav, Navbar} from 'react-bootstrap';





const Homepage = () => {
    return (
        <>
        
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
        
    <div className="carousel-container">
            
    <Carousel fade>
    <Carousel.Item >
    <img 
      className="d-block w-100"
      src={Mass}
      alt="First slide"
      style={{height:"30rem",opacity:"0.8" }}
    />
    <Carousel.Caption>
      
      <h3 className="header-text">Make your wedding a memorable one</h3>
      <Button variant="primary" >Make Appointment online</Button>
     
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Effect}
      alt="Second slide"
      style={{height:"30rem",opacity:"0.8"}}
    />

    <Carousel.Caption>
      <h3 className="header-text">Make your wedding an exciting one</h3>
      <Button variant="primary">Make Appointment online</Button>
    </Carousel.Caption>
  </Carousel.Item>
  
  
 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo3}
      alt="Second slide"
      style={{height:"30rem",opacity:"0.8"}}
    />

    <Carousel.Caption>
      <h3 className="header-text">Relieve Every Moment With Lenient Photography</h3>
      <Button variant="primary">Make Appointment online</Button>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  
  </div>
   
  
  


  
  
  




        

       
       
       
         
         

        
        </>
    )
}

export default Homepage
