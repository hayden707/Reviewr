import React, { useEffect, useState } from 'react'
import { DeleteReview, GetUserReviews } from '../services/ReviewsServices'
import { Link } from 'react-router-dom'
import './UserProfile.css'
import EditIcon from '../components/EditIcon'
import DeleteIcon from '../components/DeleteIcon'

export default function UserProfile(props) {
  const [userReviews, setUserReviews] = useState([])
  const [sameUserReviews, setSameUserReviews] = useState(false)

  const handleUserReviews = async () => {
    const data = await GetUserReviews(props.match.params.user_id)
    setUserReviews(data.reverse())
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
    if (props.match.params.user_id === localStorage.getItem('userId')) {
      return setSameUserReviews(true)
    }
  }
  useEffect(() => {
    handleUserReviews()
    checkIfSameUser()
  }, [])
  return (
    <div>
      {userReviews &&
        userReviews.map((review) => (
          <div className="card" key={review.id}>
            <div>
              <div className="grid-layout">
                <div className="title-info-container">
                  <h3 id="album-title">{review.album.title}</h3>
                  <h3 id="artist-name">{review.album.artist}</h3>
                </div>
                <div className="album-image-container">
                  <Link to={`/albumreviews/${review.album.deezer_id}`}>
                    <img
                      src={review.album.image}
                      className="album-cover GrowOnHover"
                      alt="review"
                    />
                  </Link>
                </div>
                <div className="user-header-container">
                  <div className="rating-user-bar">
                    <p className="score">{review.rating}/10</p>
                    <h3 className="username">by {review.user.username}</h3>
                  </div>
                </div>
                <div className="review-text-container">
                  <p className="review-box">
                    {review.content.substring(0, 255)}
                  </p>
                </div>
                <div className="post-buttons">
                  {sameUserReviews && (
                    <div className="post-buttons-container">
                      <Link to={`/editreview/${review.id}`}>
                        <button className="edit-button">
                          <EditIcon />
                          Edit
                        </button>
                      </Link>
                      <button
                        className="delete-button"
                        onClick={() => {
                          deleteReview(review.id)
                        }}
                      >
                        <DeleteIcon /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
