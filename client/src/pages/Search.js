import React from 'react'

export default function Search() {
  return (
    <div>
      <h3>Search for an album</h3>
      <form className="search-form">
        <input className="search-input" type="text" name="search" required />
        <button className="search-button">Search</button>
      </form>
    </div>
  )
}
