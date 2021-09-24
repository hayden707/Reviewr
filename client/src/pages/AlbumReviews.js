import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GetDeezerAlbumDetails } from '../services/DeezerServices'
import {
  GetAlbumAverageRating,
  GetAlbumReviewsByDeezerId
} from '../services/ReviewsServices'
import './AlbumReview.css'

const AlbumReviews = (props) => {
  const [albumReviews, setAlbumReviews] = useState(null)
  const [albumDetails, setAlbumDetails] = useState(null)
  const [averageScore, setAverageScore] = useState(0)

  useEffect(async () => {
    const reviews = await GetAlbumReviewsByDeezerId(props.match.params.album_id)
    setAlbumReviews(reviews.data)
    const details = await GetDeezerAlbumDetails(props.match.params.album_id)
    setAlbumDetails(details.data)
    if (reviews.data.length) {
      const rawAverage =
        (await GetAlbumAverageRating(reviews.data[0].album_id)) || '5'
      const formattedAverage = parseFloat(
        rawAverage.data[0].average_rating
      ).toFixed(1)
      setAverageScore(formattedAverage)
    } else {
      setAverageScore(0)
    }
  }, [])

  return (
    <div>
      {albumDetails && albumReviews ? (
        <div className="AlbumReviews">
          <div className="album-info-container">
            <h6>AVERAGE SCORE</h6>
            <h1 className="avg-score">{averageScore}/10</h1>
            <iframe
              title="deezer-widget"
              src={`https://widget.deezer.com/widget/dark/album/${albumDetails.id}?tracklist=false`}
              width="400"
              height="400"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media; clipboard-write"
            ></iframe>
            <Link to={`/addreview/${props.match.params.album_id}`}>
              <button>Review this Album</button>
            </Link>
          </div>
          <div className="album-reviews-container">
            {albumReviews.length ? (
              <div>
                {albumReviews.map((review) => (
                  <div key={review.id} className="review-container">
                    <div className="reviewer-info">
                      <h3 className="user-score">
                        {parseFloat(review.rating).toFixed(1)}/10
                      </h3>
                      <Link to={`/userprofile/${review.user.id}`}>
                        <h3>by {review.user.username}</h3>
                      </Link>
                    </div>
                    <div className="review-content">
                      <p>{review.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h3>No reviews yet</h3>
            )}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default AlbumReviews
