import React, { useState } from 'react'
import { LoginUser } from '../services/Auth'
import './Login.css'

export default function Login(props) {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser({ username: username, password: password })
    setUsername(null)
    setPassword(null)
    localStorage.setItem('userId', payload.id)
    localStorage.setItem('userEmail', payload.email)
    localStorage.setItem('username', payload.username)
    props.setUser(payload)
    props.toggleAuthenticated(true)
    props.history.push('/feed')
  }

  return (
    <div className="login-grid">
      <div className="login-image-container">
        <img
          className="signup-image"
          src="https://i.imgur.com/XFthwBW.jpg"
          alt="signup"
        />
      </div>
      <div className="login-form-container">
        <h2>Log in. Rock Out.</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input1">
            <label>Username:</label>
            <input
              className="username-login"
              type="text"
              name="username"
              required
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="input2">
            <label>Password:</label>
            <input
              className="password-login"
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  )
}
