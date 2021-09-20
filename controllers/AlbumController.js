const { Album } = require('../models')

const CreateAlbum = async (req, res) => {
  try {
    const album = await Album.create({ ...req.body })
    res.send(album)
  } catch (error) {
    throw error
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
  CreateAlbum,
  DeleteAlbum
}
