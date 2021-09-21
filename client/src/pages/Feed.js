import React, { useEffect, useState } from 'react'
import { GetAllReviews } from '../services/ReviewsServices'

export default function Feed() {
  const [reviews, setReviews] = useState([])

  const handleReviews = async () => {
    const data = await GetAllReviews()
    setReviews(data)
  }
  useEffect(() => {
    handleReviews()
  }, [])

  return (
    <div>
      {reviews.map((review) => (
        <div className="card" key={review.id}>
          <h3>{review.title}</h3>
          <div>
            <img src={review.image} alt="review" />
          </div>
          <p>{review.body.substring(0, 80)}...</p>
        </div>
      ))}
    </div>
  )
}
