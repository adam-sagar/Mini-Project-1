const express = require('express')
const planetRoute = require('./routes/planetRoute.js') // require is the location of the file
const testRoute = require('./routes/testRoute')

const app = express()
const port = 3000

app.use('/', express.static('public'))
app.use('/planets', planetRoute) // telling the app to use planetRoute at the specified location. to access this file use /planets
app.use('/testRoute', testRoute)

app.listen(port, () => {
    console.log(`Example app
listening at http://localhost:${port}`)
})