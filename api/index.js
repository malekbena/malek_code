const express = require('express')
const dbConnection = require('./database/connection')

const app = express()
const PORT = process.env.PORT || 3001

dbConnection()

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})