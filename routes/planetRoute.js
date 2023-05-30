const express = require('express');
const router = express.Router();
const planetController = require('../controllers/planetController')


router.get('/control', (req, res) => {
    planetController.getPlanets(req, res)
})

module.exports = router;