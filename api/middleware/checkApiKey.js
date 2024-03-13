const apiKey = process.env.API_KEY

const checkApiKey = (req, res, next) => {
    if (req.headers['api_key'] === apiKey) {
        next()
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}
