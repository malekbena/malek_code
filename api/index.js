import express from 'express'
import dbConnection from './database/connection.js'
import projectRoutes from './routes/projectRoutes.js'



const app = express()
const PORT = process.env.PORT || 3001

dbConnection()

app.use(express.json())

app.use('/projects', projectRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})