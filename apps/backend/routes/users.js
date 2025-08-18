const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    // getOneUser,
    createUser,
    // updateUser,
    // deleteUser,
} = require('../controllers/usersAPI');

router.get('/', getAllUsers);
// router.get('/:userId', getOneUser);
// router.get('/:userId', getOneUser);
router.post('/', createUser);
// router.patch('/:userId', updateUser);
// router.delete('/:userId', deleteUser);
module.exports = router;
