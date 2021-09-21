import Axios from 'axios'
import { DEEZER_BASE_URL } from '../globals'

const Client = Axios.create({
  baseURL: DEEZER_BASE_URL,
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_API_KEY
  }
})

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export const FindAlbum = async (data) => {
  try {
    const res = await Client.get(`/search/album?q="${data}"`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAlbumDetails = async (data) => {
  try {
    const res = await Client.get(`/album/${data}`)
    return res
  } catch (error) {
    throw error
  }
}

export const FindArtist = async (data) => {
  try {
    const res = await Client.get(`/search/artist?q="${data}"`)
    return res.data
  } catch (error) {
    throw error
  }
}
