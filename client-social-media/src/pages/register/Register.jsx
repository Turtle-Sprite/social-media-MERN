import React from 'react'
import './register.css'

function Register() {
  return (
    <div className='register'>
        <div className='registerWrapper'>
            <div className='registerLeft'>
                <h3 className='registerLogo'>Social Media</h3>
                <span className='registerDesc'>
                    Connect with no one ever and be happy to cut them off forever while you stare at a distance confident you've made the right choice. 
                </span>
            </div>
            <div className='registerRight'>
                <div className='registerBox'>
                    <input placeholder='Username' className='registerInput' />
                    <input placeholder='Email' className='registerInput' />
                    <input placeholder='Password' className='registerInput' />
                    <input placeholder='Password again' className='registerInput' />
                    <button className='registerButton'>Sign up </button>
                    <button className='registerRegisterButton'>Login to Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
