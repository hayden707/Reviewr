import Client from './api'

export const GetAllAlbumReviews = async () => {
  try {
    const res = await Client.get('/reviews')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAlbumAverageRating = async (id) => {
  try {
    const res = await Client.get(`/reviews/average/${id}`)
    return res
  } catch (error) {
    throw error
  }
}

export const GetReviewById = async (id) => {
  try {
    const res = await Client.get(`/reviews/${id}`)
    return res
  } catch (error) {
    throw error
  }
}

export const GetAlbumReviews = async (id) => {
  try {
    const res = await Client.get(`/reviews/album/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserReviews = async (id) => {
  try {
    const res = await Client.get(`/reviews/user/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddUserReview = async (data) => {
  try {
    const res = await Client.post('/reviews', data)
    return res
  } catch (error) {
    throw error
  }
}

export const EditUserReview = async (id, data) => {
  try {
    const res = await Client.put(`/reviews/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteReview = async (id) => {
  try {
    const res = await Client.delete(`/reviews/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
