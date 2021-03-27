import React from 'react';
import styles from './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mass from './pictures/lenient3.jpg';
import Effect from './pictures/lenient1.jpg';
import {Carousel, Button} from 'react-bootstrap';





const Homepage = () => {
    return (
        <>
        
        <div className="appbar">
            <div className="title">Leninent Photography</div>
        </div>
        
    <div className="carousel-container">
            
    <Carousel fade>
    <Carousel.Item >
    <img 
      className="d-block w-100"
      src={Mass}
      alt="First slide"
      style={{height:"30rem" }}
    />
    <Carousel.Caption>
      <h3>Make your wedding a memorable one</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      <h3>Make your wedding an exciting one</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  
  </div>
  




        

       
       
       
         
         

        
        </>
    )
}

export default Homepage
