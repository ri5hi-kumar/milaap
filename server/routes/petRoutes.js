const express = require('express');
const router = express.Router();
const { addPet, getPets } = require('../controllers/petController');

router.route('/').post(addPet);
router.route('/').get(getPets);

module.exports = router;