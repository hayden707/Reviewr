const router = require('express').Router()
const controller = require('../controllers/AlbumController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllAlbums
)
router.get(
  '/find/:deezer_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.FindAlbumByDeezerId
)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateAlbum
)
router.delete(
  '/:album_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteAlbum
)
module.exports = router
