import React, { useState } from 'react'
import { FindAlbum } from '../services/DeezerServices'
import MediaCard from '../components/MediaCard'
import AddReview from './AddReview'
import { NavLink } from 'react-router-dom'

export default function Search() {
  const [albums, setAlbums] = useState(null)
  const [input, setInput] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await FindAlbum(input)
    setAlbums(res.data)
  }

  return (
    <div>
      <h3>Search for an album</h3>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search-input"
          type="text"
          name="search"
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button className="search-button">Search</button>
      </form>
      {albums && albums.map((album) => <MediaCard {...album} />)}
    </div>
  )
}
