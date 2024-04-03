import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../image/login.jpg';
import '../App.css'; // Import CSS file for styling

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});
  const [registered, setRegistered] = useState(false); // State to track registration status

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!password || password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Username validation
    if (!username || username.length < 3) {
      errors.username = "Username must be at least 3 characters long";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with signup logic here
      setRegistered(true); // Set registration status to true
    }
  };

  // If registration is successful, render the link to the sign-in page
  if (registered) {
    return (
      <div className='container-fluid signup-page'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-6 d-flex justify-content-center'>
            <img src={login} alt='' className='registration-image' />
          </div>
          <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
            <div className='text-center'>
              <h2>Registration Successful!</h2>
              <p>You can now proceed to sign in:</p>
              <Link to='/signin' className='btn btn-outline-dark px-4 py-2'>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If registration is not yet successful, render the registration form
  return (
    <div className='container-fluid signup-page'>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 d-flex justify-content-center'>
          <img src={login} alt='' className='registration-image' />
        </div>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
          <form onSubmit={handleSubmit} className='registration-form'>
            <h1 className='text-center mb-4'>Register</h1>
            <div className='mb-3'>
              <input
                type='text'
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>
            <div className='mb-3'>
              <input
                type='email'
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className='mb-3'>
              <input
                type='password'
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className='d-flex justify-content-center'>
              <button type='submit' className='btn btn-outline-dark px-4 py-2'>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
