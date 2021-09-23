import React, { useEffect, useState } from 'react'
import { GetAllAlbumReviews } from '../services/ReviewsServices'
import './Feed.css'
import { Link } from 'react-router-dom'

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
          <div>
            <div className="card" key={review.id}>
              <div>
                <h3 className="left">{review.album.title}</h3>
                <h3 className="left">{review.album.artist}</h3>
                <Link to={`/albumreviews/${review.album.id}`}>
                  <img
                    src={review.album.image}
                    className="album-image"
                    className="left"
                    alt="review"
                  />
                </Link>
                <Link to={`/userprofile/${review.user.id}`}>
                  <h3>by {review.user.username}</h3>
                </Link>
              </div>
              <p>{parseFloat(review.rating).toFixed(1)}</p>
              <p>{review.content.substring(0, 80)}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
