import express from 'express'
import cors from 'cors'
import dbConnection from './database/connection.js'
import projectRoutes from './routes/projectRoutes.js'
import mailRoutes from './routes/mailRoutes.js'



const app = express()
const PORT = process.env.PORT || 3001

dbConnection()

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    accessControlAllowOrigin: '*',
    credentials: true,
}))

app.use('/projects', projectRoutes)
app.use('/email', mailRoutes)

app.get('/', (req, res, next) => {
    res.send('API is running')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})