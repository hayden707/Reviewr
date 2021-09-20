const { User } = require('../models')

const CreateUser = async (req, res) => {
  try {
    const user = await Review.create({ ...req.body })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetUserById = async (req, res) => {
  try {
    const id = req.params.user_id
    const user = await User.findByPk(id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    const user = await User.update(
      { ...req.body },
      { where: { id: req.params.user_id }, returning: true }
    )
    res.send(user)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.user_id } })
    res.send({ msg: 'User deleted', payload: req.params.user_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateUser,
  GetUsers,
  GetUserById,
  UpdateUser,
  DeleteUser
}
