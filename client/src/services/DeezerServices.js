import Axios from 'axios'
import { DEEZER_BASE_URL } from '../globals'

const Client = Axios.create({
  baseURL: DEEZER_BASE_URL,
  headers: {
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'x-rapidapi-key': '2233b01271msha695cd2e0572189p1c0508jsn1b762eefe0d6'
  }
})

export const FindAlbum = async (data) => {
  try {
    const res = await Client.get(`/search/album?q="${data}"`)
    return res.data
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
