const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    // planetController.getPlanets(req, res)
    console.log('test')
})

module.exports = router;