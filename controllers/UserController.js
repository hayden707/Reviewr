const { User } = require('../models')

const CreateUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.send(user)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ['password_digest']
      }
    })
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
    res.status(500).send({ error: error })
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
    res.status(500).send({ error: error })
  }
}

const DeleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.user_id } })
    res.send({ msg: 'User deleted', payload: req.params.user_id, status: 'Ok' })
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

module.exports = {
  CreateUser,
  GetUsers,
  GetUserById,
  UpdateUser,
  DeleteUser
}
