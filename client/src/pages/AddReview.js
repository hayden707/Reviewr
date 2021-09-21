import axios from 'axios'
import React, { useState } from 'react'
import { DEEZER_BASE_URL } from '../globals'
import { AddUserReview } from '../services/ReviewsServices'

export default function AddReview() {
  const [reviewContent, setReviewContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newReviewContent = {
      content: reviewContent
    }
    axios.post(``)
  }

  return (
    <div>
      <h3>Add Review Page</h3>
    </div>
  )
}
