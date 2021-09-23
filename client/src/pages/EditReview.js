import React, { useState } from 'react'
import { GetReviewById } from '../services/ReviewsServices'
import { useEffect } from 'react'
import { EditUserReview } from '../services/ReviewsServices'

export default function EditReview(props) {
  const [updatedReview, setUpdatedReview] = useState(null)
  const [rating, setRating] = useState(0)
  const [content, setContent] = useState('')

  useEffect(async () => {
    const review = await GetReviewById(props.match.params.review_id)
    setUpdatedReview(review.data[0])
    setRating(review.data[0].rating)
    setContent(review.data[0].content)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUpdatedReview = {
      content: content,
      rating: rating,
      album_id: updatedReview.album.id,
      user_id: updatedReview.user.id,
      email: updatedReview.user.email
    }
    const res = await EditUserReview(updatedReview.id, newUpdatedReview)
    if (res.status === 200) {
      props.history.push('/')
    }
    console.log(newUpdatedReview)
  }

  return (
    <div>
      {updatedReview && (
        <div>
          <h3>{updatedReview.album.artist}</h3>
          <h3>{updatedReview.album.title}</h3>
          <img
            src={updatedReview.album.image}
            alt={updatedReview.album.title}
          />
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="updated-rating"
              value={rating}
              contentEditable="true"
              onChange={(e) => setRating(e.target.value)}
            ></input>
            <input
              type="text"
              name="updated-content"
              maxLength="500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></input>
            <button>Update review</button>
          </form>
        </div>
      )}
    </div>
  )
}
