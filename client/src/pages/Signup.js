import React from 'react'

export default function Signup() {
  return (
    <div>
      <h2>Let's get started.</h2>
      <form className="SignupForm">
        <label>Email:</label>
        <input
          className="EmailSignup"
          type="text"
          name="Email"
          required
        ></input>
        <label>Username:</label>
        <input
          className="UsernameSignup"
          type="text"
          name="Username"
          required
        ></input>
        <label>Password:</label>
        <input
          className="PasswordSignup"
          type="text"
          name="Password"
          required
        ></input>
        <label>Confirm Password:</label>
        <input
          className="ConfirmPasswordSignup"
          type="text"
          name="ConfirmPassword"
          required
        ></input>
        <button className="SignupButton">Signup Now</button>
      </form>
    </div>
  )
}
