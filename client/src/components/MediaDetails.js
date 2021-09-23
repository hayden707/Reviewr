import React from 'react'
import { NavLink } from 'react-router-dom'
import './MediaDetails.css'

export default function MediaDetails(props) {
  return (
    // <div>
    <div className="media-card">
      <NavLink to={`/albumdetails/${props.id}`}>
        <div key={props.id} className="card">
          <h3>{props.title}</h3>
          <p>{props.artist.name}</p>
          <img src={props.cover_medium} alt="album cover" />
        </div>
      </NavLink>
    </div>
    // </div>
  )
}
