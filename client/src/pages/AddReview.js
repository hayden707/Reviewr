import React, { useState, useEffect } from 'react'
import ReviewSlider from '../components/ReviewSlider'
import { AddUserReview } from '../services/ReviewsServices'
import { AddAlbum, FindAlbumByDeezerId } from '../services/AlbumServices'
import { GetAlbumDetails } from '../services/DeezerServices'

export default function AddReview(props) {
  const [albumDetails, setAlbumDetails] = useState(null)
  const [reviewContent, setReviewContent] = useState('')
  const [rating, setRating] = useState(5.0)

  useEffect(async () => {
    // External API request for album details
    const res = await GetAlbumDetails(props.match.params.album_id)
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
    <div>
      <h3>Write a Review</h3>

      {albumDetails && (
        <div>
          <h3>
            {albumDetails.title} ({albumDetails.release_date})
          </h3>
          <h4>{albumDetails.artist.name}</h4>
          <img src={albumDetails.cover} />
        </div>
      )}

      <div>
        <form onSubmit={handleSubmit}>
          <ReviewSlider setRating={setRating} />
          <input
            type="text"
            name="review-content"
            maxLength="500"
            onChange={(e) => setReviewContent(e.target.value)}
          ></input>
          <button>Submit review</button>
        </form>
      </div>
    </div>
  )
}
