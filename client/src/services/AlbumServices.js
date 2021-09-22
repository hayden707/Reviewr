import Client from './api'

export const GetAllAlbums = async () => {
  try {
    const res = await Client.get('')
    return res.data
  } catch (error) {
    throw error
  }
}

export const FindAlbumById = async (id) => {
  try {
    const res = await Client.get(`/albums/findById/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const FindAlbumByDeezerId = async (id) => {
  try {
    const res = await Client.get(`/albums/find/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddAlbum = async (data) => {
  try {
    const res = await Client.post('/albums', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateAlbum = async (data) => {
  try {
    const res = await Client.put('', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteAlbum = async (data) => {
  try {
    const res = await Client.delete('', data)
    return res.data
  } catch (error) {
    throw error
  }
}
