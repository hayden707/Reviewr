import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MediaCard(props) {
  return (
    <div>
      <div className="media-card">
        {/* {props.albums.map((album) => ( */}
        {/* <NavLink to={`/addreview/${album.id}`}> */}
        <div key={props.id} className="card">
          <img src={props.cover} alt="album cover" />
          <h3>{props.title}</h3>
          <p>{props.artist.name}</p>
        </div>
        {/* </NavLink> */}
        {/* ))} */}
      </div>
    </div>
  )
}
