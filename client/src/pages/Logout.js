import React, { useState } from 'react'

export default function Logout(props) {
  const [user, setUser] = useState(null)
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )

  const handleLogOut = (props) => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  return (
    <div>
      <form className="logout-form">
        <button className="logout-button" onClick={handleLogOut}>
          Logout
        </button>
      </form>
    </div>
  )
}
