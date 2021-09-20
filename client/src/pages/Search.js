import React from 'react'

export default function Search() {
  return (
    <div>
      <h3>Search for an album</h3>
      <form className="SearchForm">
        <input className="SearchInput" type="text" name="Search" required />
        <button className="SearchButton">Search</button>
      </form>
    </div>
  )
}
