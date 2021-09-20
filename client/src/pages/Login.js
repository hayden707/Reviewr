import React from 'react'

export default function Login() {
  return (
    <div>
      <h2>Log in. Rock Out.</h2>
      <form className="login-form">
        <label>Username:</label>
        <input
          className="username-login"
          type="text"
          name="username"
          required
        ></input>
        <label>Password:</label>
        <input
          className="password-login"
          type="text"
          name="password"
          required
        ></input>
        <button className="login-button">Login</button>
      </form>
    </div>
  )
}
