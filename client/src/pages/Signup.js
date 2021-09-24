import React, { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import './Signup.css'

const iState = {
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
}

export default function Signup(props) {
  const [formValues, setFormValues] = useState(iState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formValues.password === formValues.confirmPassword) {
      const res = await RegisterUser(formValues)
      if (res.status === 200) {
        props.history.push('/login')
      }
    }
  }

  return (
    <div>
      <div className="signup-grid">
        <div className="image-container">
          <img
            className="signup-image"
            src="https://i.imgur.com/XFthwBW.jpg"
            alt="signup"
          />
        </div>
        <div className="signup-form-container">
          <h2>Let's get started.</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="inputs" className="input1">
              <label>Email:</label>
              <input
                className="email-signup"
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="inputs" className="input2">
              <label>Username:</label>
              <input
                className="username-signup"
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="inputs" className="input3">
              <label>Password:</label>
              <input
                className="password-signup"
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="inputs" className="input4">
              <label>Confirm Password:</label>
              <input
                className="confirm-password-signup"
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="inputs" className="input5">
              <button className="signup-button">Signup Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
