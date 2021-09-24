import React from 'react'
import { NavLink } from 'react-router-dom'
import './MediaCard.css'

export default function MediaCard(props) {
  return (
    <div id="media-card">
      <NavLink to={`/albumreviews/${props.id}`}>
        <div key={props.id} className="card">
          <h3 id="title">{props.title}</h3>
          <p id="artist-name">{props.artist.name}</p>
          <img id="search-images" src={props.cover} alt="album cover" />
        </div>
      </NavLink>
    </div>
  )
}
