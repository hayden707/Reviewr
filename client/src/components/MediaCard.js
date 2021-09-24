import React from 'react'
import { NavLink } from 'react-router-dom'
import './MediaCard.css'

export default function MediaCard(props) {
  return (
    <div className="media-card">
      <NavLink to={`/albumreviews/${props.id}`}>
        <div key={props.id} className="card">
          <h3 className="seacrh-album-title">{props.title}</h3>
          <p className="artist-name">{props.artist.name}</p>
          <img
            src={props.cover_medium}
            alt="album cover"
            className="search-images GrowOnHover"
          />
        </div>
      </NavLink>
    </div>
  )
}
