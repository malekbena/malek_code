import Project from '../database/models/projectModel.js'

export const createProject = async project => {
    try {
        const newProject = new Project(project)
        let res = await newProject.save()
        return res
    } catch (error) {
        console.log('Error in projectService.js: ', error)
        throw new Error(error)
    }
}

export const getProjects = async () => {
    try {
        let res = await Project.find().select(['-__v', '-images'])
        return res
    }catch (error) {
        console.log('Error in projectService.js: ', error)
        throw new Error(error)
    }
}

export const getProject = async (id) => {
    try {
        let res = await Project.findById(id).select(['-__v'])
        return res
    }catch (error) {
        console.log('Error in projectService.js: ', error)
        throw new Error(error)
    }
}

export default { createProject, getProjects, getProject }