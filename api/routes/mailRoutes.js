import express from 'express'
import mailController from '../controllers/mailController.js'

const router = express.Router()

router.get('/send', mailController.sendMail)

export default router