const router = requirei('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get('/', /*MIDDLEWARE HERE*/ controller.GetUsers)
router.get('/:user_id', /*MIDDLEWARE HERE*/ controller.GetUserById)
router.post('/', /*MIDDLEWARE HERE*/ controller.CreateUser)
router.put('/:user_id', /*MIDDLEWARE HERE*/ controller.UpdateUser)
router.delete('/:user_id', /*MIDDLEWARE HERE*/ controller.DeleteUser)

module.exports = router
