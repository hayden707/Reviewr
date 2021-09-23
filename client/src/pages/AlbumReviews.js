import React, { useState, useEffect } from 'react'
import { FindAlbumById } from '../services/AlbumServices'
import {
  GetAlbumAverageRating,
  GetAlbumReviews
} from '../services/ReviewsServices'

const AlbumReviews = (props) => {
  const [albumReviews, setAlbumReviews] = useState([])
  const [albumDetails, setAlbumDetails] = useState({})

  useEffect(async () => {
    const reviews = await GetAlbumReviews(props.match.params.album_id)
    setAlbumReviews(reviews)
    const details = await FindAlbumById(props.match.params.album_id)
    const rawAverage = await GetAlbumAverageRating(props.match.params.album_id)
    const formattedAverage = parseFloat(
      rawAverage.data[0].average_rating
    ).toFixed(1)

    setAlbumDetails({ ...details, average: formattedAverage })
  }, [])

  return (
    <div>
      <h1>Score: {albumDetails.average}/10</h1>
      <h1>
        All album reviews for {albumDetails.title} by {albumDetails.artist}
      </h1>
      {albumReviews &&
        albumReviews.map((review) => (
          <div key={review.id}>
            <img src={review.album.image} alt={review.album.title} />
            <h3>{review.rating}</h3>
            <h3>{review.content}</h3>
          </div>
        ))}
    </div>
  )
}

export default AlbumReviews
