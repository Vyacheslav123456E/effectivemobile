const Router = require('express')
const router = new Router()
const userController = require('../controllers/UserController')

router.post('/login', userController.Login)
router.post('/registration', userController.Registration)
router.post('/users', userController.Users)
router.post('/roles', userController.Roles)
router.post('/update-user', userController.Update)

module.exports = router