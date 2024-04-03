import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle login logic here
  }

  return (
    <div className='container-fluid login-page'>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 d-flex justify-content-center'>
          <img src={require('../assets/instashipin-logo.png')} alt='InstaShipin Logo' />
        </div>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
          <form onSubmit={handleSubmit} className='w-50'>
            <h1 className='text-center mb-4'>Welcome back to InstaShipin</h1>
            <div className='mb-3'>
              <input
                type='email'
                className='form-control'
                placeholder='Username or email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='d-flex justify-content-center'>
              <button type='submit' className='btn btn-outline-dark px-4 py-2'>
                Sign in
              </button>
            </div>
          </form>
          <p className='text-center mt-4 '>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn