import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const dbUrl = process.env.DATABASE_URL

const dbConnection = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
        })
        console.log('Database connected')
    } catch (error) {
        console.error(`Database Connectivity Error: ${error}`)
        throw new Error(error)
    }
}

export default dbConnection
