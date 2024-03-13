import express from 'express'
import projectController from '../controllers/projectController.js'

const router = express.Router()

router.post('/projects', projectController.createProject)

router.get('/projects', projectController.getProjects)

export default router 