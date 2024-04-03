import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Navbar() {
  const user = useSelector((state) => state.cart.cartItems);
  console.log(user)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
           E Commerce
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonial">Testimonial</Link>
            </li>
           
          </ul>
          <div className="d-flex align-items-center">
            <Link to='/signIn' className="btn btn-outline-dark me-2">
              <i className='fa-solid fa-right-to-bracket me-1'></i>
              SignIn
            </Link>
            <Link to='/register' className="btn btn-outline-dark me-2">
              <i className="fa-solid fa-user-plus me-1"></i>
              Register
            </Link>
            <Link to='/cart' className="btn btn-outline-dark">
              <i className="fa-solid fa-cart-shopping me-1"></i>
              Cart({user.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
