import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DeleteReview, GetUserReviews } from '../services/ReviewsServices'
import { Link } from 'react-router-dom'

export default function UserProfile(props) {
  const [userReviews, setUserReviews] = useState([])

  const handleUserReviews = async () => {
    const data = await GetUserReviews(props.match.params.user_id)
    setUserReviews(data.reverse())
    console.log(data)
  }
  useEffect(() => {
    handleUserReviews()
  }, [])

  const deleteReview = async (id) => {
    const res = await DeleteReview(id)
    const newUserReviews = userReviews.filter((review) => {
      if (review.id !== id) {
        return true
      }
    })
    setUserReviews(newUserReviews)
  }

  return (
    <div>
      {userReviews &&
        userReviews.map((review) => (
          <div>
            <div className="card" key={review.id}>
              <div>
                <h3>{review.album.title}</h3>
                <h3>{review.album.artist}</h3>
                <img src={review.album.image} alt="review" />
                <h3>by {review.user.username}</h3>
              </div>
              <p>{review.rating}</p>
              <p>{review.content.substring(0, 80)}</p>
              <Link to="/editreview">
                <button>Edit review</button>
              </Link>
              <button
                onClick={() => {
                  deleteReview(review.id)
                }}
              >
                Delete review
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}
