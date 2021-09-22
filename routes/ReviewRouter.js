const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetReviews
)
router.get(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetReviewById
)
router.get(
  '/average/:album_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAverageReviews
)
router.get(
  '/album/:album_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllReviewsOneAlbum
)

router.get(
  '/user/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllReviewsOneUser
)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)
router.put(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)
router.delete(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)

module.exports = router
