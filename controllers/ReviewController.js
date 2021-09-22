const { Review, Album, User, Sequelize } = require('../models')
const { Op } = require('sequelize')

const GetReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: [
        { model: Album, as: 'album' },
        {
          model: User,
          as: 'user',
          attributes: {
            exclude: ['password_digest']
          }
        }
      ]
    })
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const GetAverageReviews = async (req, res) => {
  try {
    const id = req.params.album_id
    const average = await Review.findAll({
      attributes: [
        'album_id',
        [Sequelize.fn('AVG', Sequelize.col('rating')), 'average_rating']
      ],
      group: ['album_id'],
      where: { album_id: id }
    })
    res.send(average)
  } catch (error) {
    res.status(400).send({ error: error })
  }
}

const GetReviewById = async (req, res) => {
  try {
    const id = req.params.review_id
    const review = await Review.findAll({
      where: { id: id },
      include: [
        {
          model: Album,
          as: 'album'
        },
        {
          model: User,
          as: 'user',
          attributes: {
            exclude: ['password_digest']
          }
        }
      ]
    })
    res.send(review)
  } catch (error) {
    res.status(400).send({ error: error })
  }
}

const GetAllReviewsOneAlbum = async (req, res) => {
  try {
    const id = req.params.album_id
    const review = await Review.findAll({
      include: { model: Album, as: 'album', where: { id: id } }
    })
    res.send(review)
  } catch (error) {
    throw error
  }
}

const GetAllReviewsOneUser = async (req, res) => {
  try {
    const id = req.params.user_id
    const review = await Review.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: {
            exclude: ['password_digest']
          },
          where: { id: id }
        },
        { model: Album, as: 'album' }
      ]
    })
    res.send(review)
  } catch (error) {
    throw error
  }
}

const CreateReview = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        [Op.and]: [{ id: req.body.user_id }, { email: req.body.email }]
      }
    })
    if (user) {
      const review = await Review.create({ ...req.body })
      return res.send(review)
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        [Op.and]: [{ id: req.body.user_id }, { email: req.body.email }]
      }
    })
    if (user) {
      const review = await Review.update(
        { ...req.body },
        { where: { id: req.params.review_id }, returning: true }
      )
      return res.send(review)
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
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
  GetReviewById,
  GetAverageReviews,
  GetAllReviewsOneAlbum,
  GetAllReviewsOneUser,
  CreateReview,
  UpdateReview,
  DeleteReview
}
