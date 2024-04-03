import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Products from './navbar/Products'
import slider11 from '../image/image3.jpg'
import slider13 from '../image/image2.jpg'
import slider12 from '../image/slider-12.jpg'


function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Carousel interval={3000} pause={false} className="mb-4">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider11}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider12}
                alt="Second slide"
              />
            </Carousel.Item>
           
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider13}
                alt="Fourth slide"
              />
            </Carousel.Item> */
          </Carousel>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Products/>
        </div>
      </div>
    </div>
  );
}

export default Home;
