import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import { GetAllAlbumReviews } from '../services/ReviewsServices'
import './Feed.css'

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
    <div className="FeedComponent">
      {reviews ? (
        <div className="feed-container">
          {reviews.map((review) => (
            <div key={review.id}>
              <div className="feed-card" key={review.id}>
                <div className="feed-grid-layout">
                  <div className="title-info-container">
                    <Link to={`/albumreviews/${review.album.deezer_id}`}>
                      <h3 className="left album-title">{review.album.title}</h3>
                      <h3 className="left artist-name">
                        {review.album.artist}
                      </h3>
                    </Link>
                  </div>
                  <div className="album-image-container">
                    <Link to={`/albumreviews/${review.album.deezer_id}`}>
                      <img
                        src={review.album.image}
                        className="left feed-album-image GrowOnHover"
                        alt="review"
                      />
                    </Link>
                  </div>
                  <div className="review-header-container">
                    <div className="rating-user-bar">
                      <p className="score">
                        {parseFloat(review.rating).toFixed(1)}/10
                      </p>
                      <Link
                        className="username"
                        to={`/userprofile/${review.user.id}`}
                      >
                        <h3>by {review.user.username}</h3>
                      </Link>
                    </div>
                  </div>
                  <div className="review-text-container">
                    <p className="feed-review-content">
                      {review.content.substring(0, 500)}{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}
