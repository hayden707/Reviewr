import Client from './api'

export const GetAllReviews = async () => {
  try {
    const res = await Client.get('')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAlbumReviews = async () => {
  try {
    const res = await Client.get('')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserReviews = async () => {
  try {
    const res = await Client.get('')
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddUserReview = async (data) => {
  try {
    const res = await Client.post('', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const EditUserReview = async (data) => {
  try {
    const res = await Client.put('', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteReview = async (data) => {
  try {
    const res = await Client.delete('', data)
    return res.data
  } catch (error) {
    throw error
  }
}
