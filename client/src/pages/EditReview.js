import React, { useState, useEffect } from 'react'
import DeezerWidget from '../components/DeezerWidget'
import Loading from '../components/Loading'
import ReviewSlider from '../components/ReviewSlider'
import { GetReviewById } from '../services/ReviewsServices'
import { EditUserReview } from '../services/ReviewsServices'
import './EditReview.css'

export default function EditReview(props) {
  const [updatedReview, setUpdatedReview] = useState(null)
  const [rating, setRating] = useState(5.0)
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
    console.log(res)
  }

  return (
    <div className="EditReview">
      <h2 className="write-review">Edit Your Review</h2>
      {updatedReview ? (
        <div className="edit-review-container">
          <div className="album-details-container">
            <DeezerWidget albumId={updatedReview.album.deezer_id} />
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
                {props.authenticated && props.user
                  ? props.user.username
                  : 'you'}
              </h4>
            </div>
            <form onSubmit={handleSubmit}>
              <ReviewSlider setRating={setRating} rating={rating} />
              <textarea
                name="review-content"
                maxLength="255"
                rows="10"
                placeholder="How's this album?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <div className="review-form-footer">
                <p>{content.length}/255</p>
                <button>Submit review</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}
