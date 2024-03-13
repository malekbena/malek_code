const mongoose = require('mongoose')
require('dotenv').config()

const dbUrl = process.env.DATABASE_URL

module.exports = async () => {
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