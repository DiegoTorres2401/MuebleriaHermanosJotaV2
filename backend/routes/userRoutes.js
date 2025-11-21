const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/auth');


router.post("/", authMiddleware, userController.createUser)
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get("/perfil", authMiddleware, userController.getUserProfile)

module.exports = router;
