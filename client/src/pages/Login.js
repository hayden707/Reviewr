import React from 'react'

export default function Login() {
  return (
    <div>
      <h2>Log in. Rock Out.</h2>
      <form className="LoginForm">
        <label>Username:</label>
        <input
          className="UsernameLogin"
          type="text"
          name="Username"
          required
        ></input>
        <label>Password:</label>
        <input
          className="PasswordLogin"
          type="text"
          name="Password"
          required
        ></input>
        <button className="LoginButton">Login</button>
      </form>
    </div>
  )
}
