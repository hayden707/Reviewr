import React from 'react'

export default function MediaCard(props) {
  return (
    <div>
      <div className="media-card">
        {props.albums.map((album) => (
          <div key={album.id} className="card">
            <img src={album.cover} alt="album cover" />
            <h3>{album.title}</h3>
            <p>{album.artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
