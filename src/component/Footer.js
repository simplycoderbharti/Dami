import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>Your ecommerce website description goes here.</p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h4>Follow Us</h4>
            <ul className="list-inline social-icons">
              <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
            <Link to="/cartHistory" className="btn btn-outline-light">
              Your Orders
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
