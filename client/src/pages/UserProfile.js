import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DeleteReview, GetUserReviews } from '../services/ReviewsServices'

export default function UserProfile(props) {
  const [userReviews, setUserReviews] = useState([])
  const [sameUserReviews, setSameUserReviews] = useState(false)

  const handleUserReviews = async () => {
    const data = await GetUserReviews(props.match.params.user_id)
    setUserReviews(data.reverse())
    console.log(data)
  }

  const deleteReview = async (id) => {
    const res = await DeleteReview(id)
    const newUserReviews = userReviews.filter((review) => {
      if (review.id !== id) {
        return true
      }
    })
    setUserReviews(newUserReviews)
  }

  const checkIfSameUser = async () => {
    if (props.match.params.user_id == parseInt(localStorage.getItem.userId)) {
      return setSameUserReviews(true)
    }
  }
  useEffect(() => {
    handleUserReviews()
    // checkIfSameUser()
  }, [])
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
              {/* {sameUserReviews && ( */}
              <div>
                <button>Edit review</button>
                <button
                  onClick={() => {
                    deleteReview(review.id)
                  }}
                >
                  Delete review
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
