import React, { useState } from 'react'
import { CheckSession } from '../services/Auth'

export default function Logout(props) {
  const [user, setUser] = useState(null)
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  // handleLogOut()

  return (
    <div>
      <form className="logout-form">
        <button className="logout-button">Logout</button>
      </form>
    </div>
  )
}
