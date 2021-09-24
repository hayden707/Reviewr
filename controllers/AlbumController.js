const { Album } = require('../models')

const GetAllAlbums = async (req, res) => {
  try {
    const album = await Album.findAll()
    res.send(album)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const FindAlbum = async (req, res) => {
  try {
    const res = await Album.findAll({
      where: { deezer_id: req.params.deezer_id }
    })
    res.send(res)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const FindAlbumById = async (req, res) => {
  try {
    const album = await Album.findOne({
      where: { id: req.params.album_id }
    })
    if (album) {
      return res.send(album)
    }
    return res.send({ msg: 'not found' })
  } catch (error) {
    return res.status(500).send({ msg: error })
  }
}

const FindAlbumByDeezerId = async (req, res) => {
  try {
    const album = await Album.findOne({
      where: { deezer_id: req.params.deezer_id }
    })
    if (album) {
      return res.send(album)
    }
    return res.send({ msg: 'not found' })
  } catch (error) {
    return res.status(500).send({ msg: error })
  }
}

const CreateAlbum = async (req, res) => {
  try {
    const album = await Album.create({ ...req.body })
    return res.send(album)
  } catch (error) {
    return res.status(409).send({ msg: 'already existing' })
  }
}

const DeleteAlbum = async (req, res) => {
  try {
    await Album.destroy({ where: { id: req.params.album_id } })
    res.send({
      msg: 'Album deleted',
      payload: req.params.album_id,
      status: 'Ok'
    })
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

module.exports = {
  GetAllAlbums,
  FindAlbum,
  FindAlbumById,
  FindAlbumByDeezerId,
  CreateAlbum,
  DeleteAlbum
}
