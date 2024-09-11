import React from 'react'
import './CSS/loginsignup.css'

function LoginSignup() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name' />
          <input type="email" placeholder='Enter Your mail' />
          <input type="password" placeholder='Enter Your password' />
          <button>Continue</button>
        </div>
        <p className='loginsingup-login'>Already have an account <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' required/>
          <p>By continuing, I agree to  the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup