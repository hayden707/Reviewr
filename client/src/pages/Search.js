import React, { useState } from 'react'
import { FindDeezerAlbum } from '../services/DeezerServices'
import MediaCard from '../components/MediaCard'
import './Search.css'
import SearchIcon from '../components/SearchIcon'

export default function Search() {
  const [albums, setAlbums] = useState(null)
  const [input, setInput] = useState(null)
  const [searched, toggleSearched] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await FindDeezerAlbum(input)
    setAlbums(res.data)
    toggleSearched(true)
  }

  return (
    <div>
      <h3>Search for an album</h3>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search-input"
          type="text"
          name="search"
          placeholder="Enter Album"
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button className="search-button">
          <SearchIcon />
          Search
        </button>
      </form>
      <div className="album-card">
        {albums &&
          albums.map((album) => <MediaCard {...album} key={album.id} />)}
      </div>
    </div>
  )
}
