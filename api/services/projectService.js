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
        let res = await Project.find()
        return res
    }catch (error) {
        console.log('Error in projectService.js: ', error)
        throw new Error(error)
    }
}

export default { createProject, getProjects }