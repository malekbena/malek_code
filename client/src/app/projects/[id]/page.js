const findProject = async (id) => {
    const res = await fetch(`${process.env.API_URL}/projects/projects`)
    const projects = await res.json()
    const project = projects.find((project) => project._id === id)
    return project
}
const ProjectPage = async({ params }) => {
    const project = await findProject(params.id)
    return (
        <div>
            <h1>
                {project.title}
            </h1>
            <h2>
                Project ID: {project._id}
            </h2>
            <p>
                {project.description}
            </p>
        </div>
    )
}

export default ProjectPage