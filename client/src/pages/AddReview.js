import React, { useState, useEffect } from 'react'
import ReviewSlider from '../components/ReviewSlider'
import { AddUserReview } from '../services/ReviewsServices'
import { AddAlbum, FindAlbumByDeezerId } from '../services/AlbumServices'
import { GetDeezerAlbumDetails } from '../services/DeezerServices'
import './AddReview.css'

export default function AddReview(props) {
  const [albumDetails, setAlbumDetails] = useState(null)
  const [reviewContent, setReviewContent] = useState('')
  const [rating, setRating] = useState(5.0)

  useEffect(async () => {
    // External API request for album details
    const res = await GetDeezerAlbumDetails(props.match.params.album_id)
    // Local API request, check if album exists in database
    const existing = await FindAlbumByDeezerId(res.data.id)
    // If albums exists in local API
    if (existing.id) {
      setAlbumDetails({ ...res.data, databaseId: existing.id })
    } else {
      const payload = {
        title: res.data.title,
        image: res.data.cover_big,
        artist: res.data.artist.name,
        deezer_id: res.data.id
      }
      const newAlbum = await AddAlbum(payload)
      setAlbumDetails({ ...res.data, databaseId: newAlbum.id })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newReviewContent = {
      content: reviewContent,
      rating: rating,
      album_id: albumDetails.databaseId,
      user_id: props.user.id,
      email: props.user.email
    }
    const res = await AddUserReview(newReviewContent)
    if (res.status === 200) {
      props.history.push('/')
    }
  }

  return (
    <div className="AddReview">
      <h2 className="write-review">Write a Review</h2>
      <div className="add-review-container">
        <div className="album-details-container">
          {albumDetails && (
            <div>
              <iframe
                title="deezer-widget"
                src={`https://widget.deezer.com/widget/dark/album/${albumDetails.id}?tracklist=false`}
                width="350"
                height="350"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media; clipboard-write"
              ></iframe>
            </div>
          )}
        </div>
        <div className="album-review-form-container">
          <div className="review-form-header">
            <h2>
              Your Rating:
              <span className="review-user-score">
                {parseFloat(rating).toFixed(1)}/10
              </span>
            </h2>
            <h4>
              by{' '}
              {props.authenticated && props.user ? props.user.username : 'you'}
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <ReviewSlider setRating={setRating} />
            <textarea
              name="review-content"
              maxLength="255"
              rows="10"
              placeholder="How's this album?"
              onChange={(e) => setReviewContent(e.target.value)}
            ></textarea>
            <div className="review-form-footer">
              <p>{reviewContent.length}/255</p>
              <button>Submit review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
