import React, { useState, useEffect } from 'react'
import { GetAlbumReviews } from '../services/ReviewsServices'

const AlbumReviews = (props) => {
  const [albumReviews, setAlbumReviews] = useState([])

  useEffect(async () => {
    const res = await GetAlbumReviews(props.match.params.album_id)
    setAlbumReviews(res)
  }, [])

  return (
    <div>
      <h1>All album reviews for {props.match.params.album_id}</h1>
    </div>
  )
}

export default AlbumReviews
