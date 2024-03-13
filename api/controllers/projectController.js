const projectService = require('../services/projectService')

module.exports.createProject = async (req, res) => {
    try {
        const project = await projectService.createProject(req.body)
        res.status(201).json(project)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports.getProjects = async (req, res) => {
    try {
        const projects = await projectService.getProjects()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}