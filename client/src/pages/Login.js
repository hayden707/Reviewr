import React, { useState } from 'react'
import { LoginUser } from '../services/Auth'

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
    <div>
      <h2>Log in. Rock Out.</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          className="username-login"
          type="text"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Password:</label>
        <input
          className="password-login"
          type="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="login-button">Login</button>
      </form>
    </div>
  )
}
