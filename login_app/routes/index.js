const express = require("express");
const { getUsers,getUserProfile, Register, Login, Logout,editUserDetails } = require("../controllers/Users.js");
const { verifyToken } = require("../middleware/VerifyToken.js");
const { refreshToken } = require("../controllers/RefreshToken.js");

const router = express.Router();

router.get('/users/all', verifyToken, getUsers);
router.get('/users/me', verifyToken, getUserProfile);
router.put('users/update', verifyToken, editUserDetails);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

module.export =  router;