const { Review } = require('../models')

const GetReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll()
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const CreateReview = async (req, res) => {
  try {
    const review = await Review.create({ ...req.body })
    res.send(review)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const review = await Review.update(
      { ...req.body },
      { where: { id: req.params.review_id }, returning: true }
    )
    res.send(review)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    await Review.destroy({ where: { id: req.params.review_id } })
    res.send({
      msg: 'Review deleted',
      payload: req.params.review_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetReviews,
  CreateReview,
  UpdateReview,
  DeleteReview
}
