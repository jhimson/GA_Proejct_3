const express = require('express');
const router = express.Router();
const { addNewResume } = require('../../controllers/api/C-resume');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/resume
router.post('/', addNewResume);

module.exports = router;
