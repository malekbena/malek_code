const Project = require('../database/models/projectModel')

module.exports.createProject = async project => {
    try {

        const newProject = new Project(
            {
                title: project.body.title,
                description: project.body.description,
                link: project.body.link,
                technologies: project.body.technologies,
                cover: project.body.cover,
                images: project.body.images,
            }
        )
        let res = newProject.save()
        return res
    } catch (error) {
        console.log('Error in projectService.js: ', error)
        throw new Error(error)
    }
}

module.exports.getProjects = async () => {
    try {
        let res = await Project.find()
        return res
    }catch (error) {
        console.log('Error in projectService.js: ', error)
        throw new Error(error)
    }
}