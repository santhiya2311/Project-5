const express = require('express');
const { getUsers, addUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);
router.delete('/:id', deleteUser);

module.exports = router;
