import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>Social Media</h3>
                <span className='loginDesc'>
                    Connect with no one ever and be happy to cut them off forever while you stare at a distance confident you've made the right choice. 
                </span>
            </div>
            <div className='loginRight'>
                <div className='loginBox'>
                    <input placeholder='Email' className='loginInput' />
                    <input placeholder='Password' className='loginInput' />
                    <button className='loginButton'>Log In</button>
                    <span className='loginForgot'>Forgot Password?</span>
                    <button className='loginRegisterButton'>Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
