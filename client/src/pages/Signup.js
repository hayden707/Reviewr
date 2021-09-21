import React, { useState } from 'react'

const iState = {
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
}

export default function Signup() {
  const [formValues, setFormValues] = useState(iState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>Let's get started.</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          className="email-signup"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        ></input>
        <label>Username:</label>
        <input
          className="username-signup"
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          required
        ></input>
        <label>Password:</label>
        <input
          className="password-signup"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
        ></input>
        <label>Confirm Password:</label>
        <input
          className="confirm-password-signup"
          type="password"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
          required
        ></input>
        <button className="signup-button">Signup Now</button>
      </form>
    </div>
  )
}
