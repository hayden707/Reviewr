import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { DEEZER_BASE_URL } from '../globals'
import { AddUserReview } from '../services/ReviewsServices'
import { AddAlbum } from '../services/AlbumServices'
import MediaCard from '../components/MediaCard'
import { GetAlbumDetails } from '../services/DeezerServices'

export default function AddReview(props) {
  const [reviewContent, setReviewContent] = useState('')
  const [albumDetails, setAlbumDetails] = useState(null)
  const [rating, setRating] = useState(5)

  useEffect(async () => {
    const res = await GetAlbumDetails(props.match.params.album_id)
    setAlbumDetails(res.data)
    const newAlbum = await AddAlbum(res.data)
    console.log(newAlbum)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newReviewContent = {
      content: reviewContent,
      rating: rating,
      user_id: 1,
      album_id: albumDetails.album.id
    }
    const res = await AddUserReview(newReviewContent)
    console.log(res, 'hey')
  }

  const handleChange = async (e) => {}

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
          <input
            type="number"
            name="review-rating"
            onChange={(e) => setRating(e.target.value)}
          ></input>
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
