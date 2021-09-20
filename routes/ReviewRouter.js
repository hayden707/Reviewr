const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get('/', controller.GetReviews)
router.post('/', /*MIDDLEWARE HERE*/ controller.CreateReview)
router.put('/:review_id', /*MIDDLEWARE HERE*/ controller.UpdateReview)
router.delete('/:review_id', /*MIDDLEWARE HERE*/ controller.DeleteReview)

module.exports = router
