import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FindAlbumById, FindAlbumByDeezerId } from '../services/AlbumServices'
import { GetDeezerAlbumDetails } from '../services/DeezerServices'
import {
  GetAlbumAverageRating,
  GetAlbumReviews,
  GetAlbumReviewsByDeezerId
} from '../services/ReviewsServices'
import './AlbumReview.css'

const AlbumReviews = (props) => {
  const [albumReviews, setAlbumReviews] = useState(null)
  const [albumDetails, setAlbumDetails] = useState(null)

  // const handleLoad = async () => {
  //   const reviews = await GetAlbumReviewsByDeezerId(props.match.params.album_id)
  //   setAlbumReviews(reviews.data)
  //   if (reviews.length) {
  //     console.log('albumreview lengt > 1')
  //     const albumId = reviews[0].album_id
  //     const details = await GetDeezerAlbumDetails(props.match.params.album_id)
  //     const rawAverage = await GetAlbumAverageRating(albumId)
  //     const formattedAverage = parseFloat(
  //       rawAverage.data[0].average_rating
  //     ).toFixed(1)
  //     setAlbumDetails({ ...details, average: formattedAverage })
  //   } else {
  //     const deezerId = props.match.params.album_id
  //     const details = await GetDeezerAlbumDetails(deezerId)
  //     setAlbumDetails({ ...details, average: 0 })
  //   }
  //   return
  // }

  useEffect(async () => {
    let isMounted = true
    const reviews = await GetAlbumReviewsByDeezerId(props.match.params.album_id)
    setAlbumReviews(reviews.data)
    if (reviews.length) {
      console.log('albumreview lengt > 1')
      const albumId = reviews[0].album_id
      const details = await GetDeezerAlbumDetails(props.match.params.album_id)
      const rawAverage = await GetAlbumAverageRating(albumId)
      const formattedAverage = parseFloat(
        rawAverage.data[0].average_rating
      ).toFixed(1)
      setAlbumDetails({ ...details, average: formattedAverage })
    } else {
      const deezerId = props.match.params.album_id
      const details = await GetDeezerAlbumDetails(deezerId)
      setAlbumDetails({ ...details, average: 0 })
    }
    return () => (isMounted = false)
  }, [])

  return (
    <div>
      {albumDetails && albumReviews ? (
        <div className="AlbumReviews">
          <div className="album-info-container">
            <h6>AVERAGE SCORE</h6>
            <h1 className="avg-score">{albumDetails.average}/10</h1>
            <iframe
              title="deezer-widget"
              src={`https://widget.deezer.com/widget/dark/album/${albumDetails.deezer_id}?tracklist=false`}
              width="400"
              height="400"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media; clipboard-write"
            ></iframe>
            <Link to={`/addreview/${albumDetails.deezer_id}`}>
              <button>Review this Album</button>
            </Link>
          </div>
          <div className="album-reviews-container">
            {albumReviews &&
              albumReviews.map((review) => (
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
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default AlbumReviews
