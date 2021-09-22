import React, { useEffect, useState } from 'react'
import { GetAllAlbumReviews } from '../services/ReviewsServices'

export default function Feed() {
  const [reviews, setReviews] = useState([])

  const handleReviews = async () => {
    const data = await GetAllAlbumReviews()
    setReviews(data.reverse())
  }
  useEffect(() => {
    handleReviews()
  }, [])

  return (
    <div>
      {reviews &&
        reviews.map((review) => (
          <div className="card" key={review.id}>
            <div>
              <h3>{review.album.title}</h3>
              <h3>{review.album.artist}</h3>
              <img src={review.album.image} alt="review" />
              <h3>by {review.user.username}</h3>
            </div>
            <p>{review.rating}</p>
            <p>{review.content.substring(0, 80)}...</p>
          </div>
        ))}
    </div>
  )
}
