import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import registration from '../image/registration.jpg'


function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Username validation
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    if (!username || !usernameRegex.test(username)) {
      errors.username = "Username must be at least 3 characters long and can only contain letters, numbers, and underscores";
      isValid = false;
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
    if (!password || !passwordRegex.test(password)) {
      errors.password = "Password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, and one number";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with sign-in logic here
    }
  };

  return (
    <div className='container-fluid login-page'>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 d-flex justify-content-center'>
        <img src={registration} alt='Logo' />
        </div>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
          <form onSubmit={handleSubmit} className='w-50'>
            <h1 className='text-center mb-4'>Sign In</h1>
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
                Sign in
              </button>
            </div>
          </form>
          <p className='text-center mt-4 '>
            Don't have an account? <Link to='/register'>Register Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
