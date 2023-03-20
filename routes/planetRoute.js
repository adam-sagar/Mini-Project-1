const express = require('express');
const router = express.Router();
const planetController = require('../controllers/planetController')


router.get('/control', (req, res) => {
    planetController.getPlanets(req, res)
    // console.log('test')
})

router.get('/thing', (req, res) => {
    // planetController.getPlanets(req, res)
    console.log('test')
})

module.exports = router;