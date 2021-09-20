const router = require('express').Router()
const controller = require('../controllers/AlbumController')
const middleware = require('../middleware')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateAlbum
)
router.delete(
  '/:album_id',
  middleware.stripToken,
  middle.verifyToken,
  controller.DeleteAlbum
)
module.exports = router
