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

  useEffect(async () => {
    const res = await GetAlbumDetails(props.match.params.album_id)
    setAlbumDetails(res.data)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newReviewContent = {
      content: reviewContent
    }
    axios.post(``)
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
        <form>
          <input type="text" name="review-title"></input>
          <input type="text" name="review-content" maxLength="500"></input>
          <button>Submit review</button>
        </form>
      </div>
    </div>
  )
}
