import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DeleteReview, GetUserReviews } from '../services/ReviewsServices'

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

  // const deleteReview = async (e) => {
  //   const res = await DeleteReview()
  // }

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
              <button>Edit review</button>
              <button>Delete review</button>
            </div>
          </div>
        ))}
    </div>
  )
}
