import React, { useState, useEffect } from 'react'

const AlbumReviews = (props) => {
  const [albumReviews, setAlbumReviews] = useState([])

  useEffect(async () => {}, [])

  return (
    <div>
      <h1>All album reviews for {props.match.params.album_id}</h1>
    </div>
  )
}

export default AlbumReviews
