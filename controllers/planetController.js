const axios = require('axios');

function getPlanets (req, res) {
     
axios.get('https://swapi.dev/api/planets/?format=json')
    .then(response => {
        console.log(response.data)
        res.status(200).json({success: true, ...response.data})
    })
    .catch(error => {
        res.status(500).json({success: false, message: error.message})
    })
}

module.exports = {getPlanets}