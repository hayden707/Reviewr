import React from 'react'
import { NavLink } from 'react-router-dom'
import './MediaCard.css'

export default function MediaCard(props) {
  return (
    <div className="media-card">
      <NavLink to={`/albumreviews/${props.id}`}>
        <div key={props.id} className="card">
          <h3>{props.title}</h3>
          <p>{props.artist.name}</p>
          <img src={props.cover} alt="album cover" />
        </div>
      </NavLink>
    </div>
  )
}
