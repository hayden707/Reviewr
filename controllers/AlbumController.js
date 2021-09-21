const { Album } = require('../models')

const GetAllAlbums = async (req, res) => {
  try {
    const album = await Album.findAll()
    res.send(album)
  } catch (error) {
    throw error
  }
}

const FindAlbum = async (req, res) => {
  try {
    const res = await Album.findAll({
      where: { deezer_id: req.params.deezer_id }
    })
    res.send(res)
  } catch (error) {}
}

const CreateAlbum = async (req, res) => {
  try {
    const album = await Album.create({ ...req.body })
    res.send(album)
  } catch (error) {
    res.status(409).send({ msg: 'already existing' })
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
    throw error
  }
}

module.exports = {
  GetAllAlbums,
  FindAlbum,
  CreateAlbum,
  DeleteAlbum
}
